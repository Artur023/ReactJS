import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {'API-KEY': 'd1ea7b02-4dfc-4b5d-b244-3d3f1c6075cd'}
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
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}
