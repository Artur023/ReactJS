import {instance, APIResponseType, ResultCodeForCaptcha, ResultCodesEnum} from "./api";

type MeResponseDataType = {
    id: number
    email: string
    login: string
}
type LoginLogoutResponseDataType = {
    userId: number
}
export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, isAuth, captcha: string | null = null) {
        return instance.post<APIResponseType<LoginLogoutResponseDataType, ResultCodesEnum | ResultCodeForCaptcha>>
        (`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}