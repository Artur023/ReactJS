import React, { FC } from "react";
// @ts-ignore
import s from './Users.module.css'
// @ts-ignore
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import {UserItemType} from "../../types/Types";

type PropsType = {
    user: UserItemType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingIsProgress: Array<number>
}

const User:FC<PropsType> = ({user, follow, unfollow, followingIsProgress}) => {
    return <div>
        {<div>
                <span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/></NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingIsProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={followingIsProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
        </div>}
    </div>
}

export default User;