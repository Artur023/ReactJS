import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {PostType} from "../../../types/Types";
import {FC} from "react";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.postsPage.posts,
        newPostText: state.postsPage.newPostText
    }
}
const MyPostsContainer: FC<PropsType> = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;