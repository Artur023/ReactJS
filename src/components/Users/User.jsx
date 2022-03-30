import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
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
                            ? <button disabled={props.followingIsProgress.some(id => id === user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingIsProgress.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
        </div>}
    </div>
}

export default User;