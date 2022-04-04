import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'Hello, go to cs', likesCount: '20'},
    ],
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
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
        case  SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default :
            return state;
    }
};
export let addPost = (newMyPost) => ({type: ADD_POST, newMyPost});
export let deletePost = (postId) => ({type: DELETE_POST, postId});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export let savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
//thanks
export const getProfileUser = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfileUser(userId)
    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data));
}


export const updateStatus = (status) => async (dispatch) => {
    let data = profileAPI.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}
export default profileReducer;