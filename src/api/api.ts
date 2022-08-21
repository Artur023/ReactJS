import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': 'bb2f4170-1e67-4fcf-b81f-e5e7646ed599'}
})


export type UserStatusType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    resultCode: RC
    message: Array<string>
}