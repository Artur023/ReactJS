export type PostType = {
    id: number | null
    message: string | null
    likesCount: number | null
}

type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    id: number | null
    message: string | null
    likesCount: string | null
    fullName: string
    aboutMe: string
    lookingForAJob: boolean | string
    lookingForAJobDescription: string
    contacts: ProfileContactsType
    photos: PhotoType
    userId: number


}
export type PhotoType = {
    small: string
    large: string
}

type UserItemType = {
    id: number | null
    name: string | null
    status: string | null
    followed: boolean
    photos: PhotoType
    uniqueUrlName: null | string
}

export type UsersType = {
    items: Array<UserItemType>
    totalCount: number
    error: string
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