import React from 'react';
import s from './Post.module.css'
import UsersImage from "../../../../assets/images/user.png"


const Post = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img alt='avatar' src={UsersImage}/>
            {message}
            <div>
                <span>like</span> {likesCount}
            </div>
        </div>)
};

export default Post;