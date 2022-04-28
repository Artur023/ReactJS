import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

type PayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}

let initialState = {
    id: null as number,
    email: null as string,
    login: null as string,
    isAuth: false as boolean,
    captchaUrl: null as string
};

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default :
            return state;
    }
};
type SetAuthUserDataActionCreator = {
    type: typeof SET_USER_DATA,
    payload: PayloadType
}
export const setAuthUserData = (id, email, login, isAuth): SetAuthUserDataActionCreator => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch: any) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, isAuth, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, isAuth, captcha)
    let messages = data.data.messages.length > 0 ? data.data.messages[0] : "Some error"
    if (data.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(stopSubmit("login", {_error: messages}))
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;


