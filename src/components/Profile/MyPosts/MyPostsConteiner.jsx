import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner;