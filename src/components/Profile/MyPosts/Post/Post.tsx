import React, {FC} from 'react';
// @ts-ignore
import s from './Post.module.css'
// @ts-ignore
import UsersImage from "../../../../assets/images/user.png"

type PropsType = {
    message: string
    likesCount: number
}

const Post: FC<PropsType> = ({message, likesCount}) => {
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