import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [{id: 1, message: 'Hi, how are you?', likesCount: '15'}, {
        id: 2, message: 'Hello, go to cs', likesCount: '20'
    },],
    profile: null,
    status: ""
};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                "id": 5,
                "message": action.newMyPost,
                "likesCount": 33
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case  SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case  SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default :
            return state;
    }
};
export let addPost = (newMyPost) => ({type: ADD_POST, newMyPost});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});
//thanks
export const getProfileUser = (userId) => (dispatch) => {
    profileAPI.getProfileUser(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(data => {
        dispatch(setUserStatus(data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
}
export default profileReducer;