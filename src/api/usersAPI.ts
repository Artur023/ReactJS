import {instance, APIResponseType} from "./api";
import {UsersType} from "../types/Types";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser(UserId: number) {
        return instance.post<APIResponseType>(`follow/${UserId}`)
            .then(res => res.data)
    },
    unFollowUser(UserId: number) {
        return instance.delete(`follow/${UserId}`)
            .then(res => res.data) as Promise<APIResponseType>
    }
}