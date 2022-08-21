import {objectHelpers} from "../utils/objectHelpers";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./reduxStore";
import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";

type InitialStateType = {
    users: Array<object>
    totalUsersCount: number | null
    pageSize: number | null
    currentPage: number | null
    isFetching: boolean
    followingIsProgress: Array<number>
}

let initialState: InitialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: [],
};

const usersReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "users/FOLLOW":
            return {
                ...state,
                users: objectHelpers(state.users, action.userId, "id", {followed: true})
            }
        case "users/UNFOLLOW":
            return {
                ...state,
                users: objectHelpers(state.users, action.userId, "id", {followed: false})
            }
        case "users/SET_USERS":
            return {
                ...state, users: action.users
            }
        case "users/SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "users/SET_TOTAL_COUNT":
            return {
                ...state, totalUsersCount: action.count
            }
        case "users/TOGGLE_IS_FETCHING":

            return {
                ...state, isFetching: action.isFetching
            }
        case "users/TOGGLE_IS_PROGRESS_FOLLOW":
            return {
                ...state,
                followingIsProgress: action.isFetching
                    ? [...state.followingIsProgress, action.userId]
                    : [state.followingIsProgress.filter(id => id !== action.userId)]
            }
        default :
            return state;
    }
};

export type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    followSuccess: (userId: number) => ({type: 'users/FOLLOW', userId} as const),
    unfollowSuccess: (userId) => ({type: 'users/UNFOLLOW', userId} as const),
    setUsers: (users) => ({type: 'users/SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'users/SET_CURRENT_PAGE',
        currentPage
    } as const),
    setTotalUsersCount: (count: number) => ({
        type: 'users/SET_TOTAL_COUNT',
        count
    } as const),
    toggleIsFetching: (isFetching) => ({
        type: 'users/TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleIsProgressFollow: (isFetching, userId) => ({
        type: 'users/TOGGLE_IS_PROGRESS_FOLLOW',
        isFetching,
        userId
    } as const)
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const getUsersThunk = (currentPage, pageSize): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setCurrentPage(currentPage))
    }
}

type DispatchType = Dispatch<ActionsTypes>

const _followUnfollowFlow = async (dispatch: DispatchType, userId, apiMethod,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleIsProgressFollow(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsProgressFollow(false, userId))
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), actions.followSuccess);
    }
};
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), actions.unfollowSuccess);
    }
}

export default usersReducer;