import React, {FC} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

// @ts-ignore
import s from './Users.module.css'

import {UsersType} from "../../types/Types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    followingIsProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    // toggleIsProgressFollow: any
}

const Users: FC<PropsType> = ({totalUsersCount, pageSize, currentPage, users, onPageChanged, ...props}) => {
    return <div>
        <div className={s.paginator}><Paginator currentPage={currentPage}
                                                onPageChanged={onPageChanged}
                                                pageSize={pageSize}
                                                totalItemsCount={totalUsersCount}
        /></div>
        {
            users.map(u => <User user={u}
                                       key={u.id}
                                       followingIsProgress={props.followingIsProgress}
                                       follow={props.follow}
                                       unfollow={props.unfollow}
            />)
        }
    </div>
}


export default Users;