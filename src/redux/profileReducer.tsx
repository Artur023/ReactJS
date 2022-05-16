import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotoType, PostType, ProfileType} from "../types/Types";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

type InitialStateType = {
    posts: Array<PostType> | null | any
    profile: ProfileType | null
    status: string | null
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'Hello, go to cs', likesCount: '20'},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                "id": 5,
                "message": action.newMyPost,
                "likesCount": 33
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
                profile: {...state.profile, photos: action.photos} as ProfileType // временно
            }
        case SAVE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            }
        default :
            return state;
    }
};

type AddPostActionCreator = {
    type: typeof ADD_POST
    newMyPost?: string
}
export let addPost = (newMyPost: string): AddPostActionCreator => ({type: ADD_POST, newMyPost});

type DeletePostActionCreator = {
    type: typeof DELETE_POST
    postId?: number
}
export let deletePost = (postId: number): DeletePostActionCreator => ({type: DELETE_POST, postId});

type SetUserProfileActionCreator = {
    type: typeof SET_USER_PROFILE
    profile?: ProfileType
}
export let setUserProfile = (profile: ProfileType): SetUserProfileActionCreator => ({type: SET_USER_PROFILE, profile});

type SetUserStatusActionCreator = {
    type: typeof SET_USER_STATUS
    status?: string | null
}
export let setUserStatus = (status: string): SetUserStatusActionCreator => ({type: SET_USER_STATUS, status});

type SavePhotoSuccessActionCreator = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos?: PhotoType
}
export let savePhotoSuccess = (photos: PhotoType): SavePhotoSuccessActionCreator => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

type SaveProfileSuccessActionCreator = {
    type: typeof SAVE_PROFILE_SUCCESS
    profile?: ProfileType
}
export const saveProfileSuccess = (profile: ProfileType): SaveProfileSuccessActionCreator => ({
    type: SAVE_PROFILE_SUCCESS,
    profile
})

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

export const saveProfile = (profile) => async (dispatch, getState) => {
    let response = await profileAPI.saveProfile(profile)
    const userId = getState().auth.id
    if (response.resultCode === 0) {
        dispatch(getProfileUser(userId));
    } else {
        dispatch(stopSubmit("profileData", {_error: response.messages}))
        return Promise.reject(response.messages[1])
    }
}
export default profileReducer;