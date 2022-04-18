import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': 'bb2f4170-1e67-4fcf-b81f-e5e7646ed599'}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(UserId) {
        return instance.post(`follow/${UserId}`)
            .then(response => response.data)
    },
    unFollowUser(UserId) {
        return instance.delete(`follow/${UserId}`)
            .then(response => response.data)
    }
}
export const profileAPI = {
    getProfileUser(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData)
            .then(response => response.data)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, isAuth, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response)
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`)
            .then(response => response.data)
    }
}
