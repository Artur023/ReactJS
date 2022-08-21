import {ResultCodeForCaptcha, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {PayloadType} from "../types/Types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null as number,
    email: null as string,
    login: null as string,
    isAuth: false as boolean,
    captchaUrl: null as string
};

type InitialStateType = typeof initialState

type ActionType = SetAuthUserDataActionCreator | GetCaptchaUrlSuccess

const authReducer = (state = initialState, action: ActionType): InitialStateType => {
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

type CaptchaType = {
    url: string
}

type GetCaptchaUrlSuccess = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: CaptchaType
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const setAuthUserData = (id, email, login, isAuth): SetAuthUserDataActionCreator => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const getCaptchaUrlSuccess = (captchaUrl: any) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl
});

export const getAuthUserData = (): ThunkType => async (dispatch: any) => {
    const meData = await authAPI.me()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, isAuth: boolean, captcha: string): ThunkType => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, isAuth, captcha)
    // const messages = data.message.length > 0 ? data.message[0] : "Some error"
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        // dispatch(stopSubmit("login", {_error: messages})) // вынуждену закаментил была ошибка
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptcha()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;


