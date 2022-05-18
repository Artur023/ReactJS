export type PostType = {
    id: number | null
    message: string | null
    likesCount: number | null
}
export type ProfileType = {
    id: number | null
    message: string | null
    likesCount: string | null
    fullName: string
    aboutMe: string
    lookingForAJob: boolean | string
    lookingForAJobDescription: string
    contacts: ContactType
    photos: PhotoType

}
export type PhotoType = {
    small: string
    large: string
}
export type UsersType = {
    id: number | null
    name: string | null
    status: string | null
    followed: boolean
    photos: PhotoType

}
export type PayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}
export type DialogType = {
    id: number | null
    name: string | null
}
export type MessageType = {
    id: number | null
    message: string | null
}
// Types components
export type ComponentPostType = {
    message: string
    likesCount: number
}
export type ContactType = {
    contactTitle: string | null
    contactValue: string | null
}