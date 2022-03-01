import React from 'react';
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
}
const MyPostsConteiner = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)

export default MyPostsConteiner;