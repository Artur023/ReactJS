import React from 'react';
import s from './Post.module.css'
import UsersImage from '../../../../assets/images/user.png'

const Post = (props) => {

  return (
    <div className={s.item}>
      <img alt='avatar' src={UsersImage} />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;