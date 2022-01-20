import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsConteiner = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return < MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.postsPage.posts}
                     newPostText={state.postsPage.newPostText}/>
};

export default MyPostsConteiner;