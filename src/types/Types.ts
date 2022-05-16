export type PostType = {
    id: number | null
    message: string | null
    likesCount: string | null
}
export type ProfileType = {
    id: number | null
    message: string | null
    likesCount: string | null
}
export type PhotoType = {
    small: string
    large: string
}
export type UsersType = {
    id: number | null
    name: string | null
    status: string | null
    PhotoType
    followed: boolean
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