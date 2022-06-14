import axios from "axios";
import {ProfileType, UsersType} from "../types/Types";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': 'bb2f4170-1e67-4fcf-b81f-e5e7646ed599'}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(UserId: number) {
        return instance.post<UserStatusType>(`follow/${UserId}`)
            .then(response => response.data)
    },
    unFollowUser(UserId: number) {
        return instance.delete<UserStatusType>(`follow/${UserId}`)
            .then(response => response.data)
    }
}

export type UserStatusType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export const profileAPI = {
    getProfileUser(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId: number) {
        return instance.get<UserStatusType>(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateUserStatus(status: string) {
        return instance.put<UserStatusType>(`profile/status`, {status})
            .then(response => response.data)
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData)
            .then(response => response.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<UserStatusType>(`profile`, profile)
            .then(response => response.data)
    }
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type LoginLogoutResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}
type CaptchaResponseType = {
    url: string
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, isAuth, captcha: string | null = null) {
        return instance.post<LoginLogoutResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete<LoginLogoutResponseType>(`auth/login`)
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get<CaptchaResponseType>(`/security/get-captcha-url`)
            .then(response => response.data)
    }
}
