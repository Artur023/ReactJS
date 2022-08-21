import {PhotoType, ProfileType} from "../types/Types";
import {instance, APIResponseType, UserStatusType} from "./api";

type SavePhotosDataType = {
    photos: PhotoType
}

export const profileAPI = {
    getProfileUser(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(res => res.data)
    },
    getUserStatus(userId: number) {
        return instance.get<UserStatusType>(`profile/status/` + userId)
            .then(res => res.data)
    },
    updateUserStatus(status: string) {
        return instance.put<UserStatusType>(`profile/status`, {status})
            .then(res => res.data)
    },
    savePhoto(photoFile: any) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put<APIResponseType<SavePhotosDataType>>(`profile/photo`, formData)
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profile)
            .then(res => res.data)
    }
}