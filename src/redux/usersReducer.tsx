import {usersAPI} from "../api/api";
import {objectHelpers} from "../utils/objectHelpers";
import {UsersType} from "../types/Types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_PROGRESS_FOLLOW = "TOGGLE_IS_PROGRESS_FOLLOW";

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


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: objectHelpers(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: objectHelpers(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:

            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_PROGRESS_FOLLOW:
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
type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId});

type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId): UnfollowSuccessType => ({type: UNFOLLOW, userId});

type SetUsersSuccessType = {
    type: typeof SET_USERS
    users: UsersType
}
export const setUsers = (users): SetUsersSuccessType => ({type: SET_USERS, users});

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_COUNT
    count
}
export const setTotalUsersCount = (count: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_COUNT,
    count
});

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching): ToggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

type ToggleIsProgressFollowType = {
    type: typeof TOGGLE_IS_PROGRESS_FOLLOW
    isFetching: boolean
    userId: number
}
export const toggleIsProgressFollow = (isFetching, userId): ToggleIsProgressFollowType => ({
    type: TOGGLE_IS_PROGRESS_FOLLOW,
    isFetching,
    userId
});


export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false))
        dispatch(setCurrentPage(currentPage))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsProgressFollow(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsProgressFollow(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess);
    }
};
export const unfollow = (userId: number) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;