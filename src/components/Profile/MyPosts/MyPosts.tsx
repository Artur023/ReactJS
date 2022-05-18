import React, {FC} from 'react';
// @ts-ignore
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {PostType} from "../../../types/Types";

const maxLength10 = maxLengthCreator(10);

type PropsType = {
    posts: Array<PostType>
    addPost: (newMyPost: string) => void
}


const MyPosts: FC<PropsType> = (props) => {
    let postElements = props.posts
        .map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)
    let onSubmit = (formData) => {
        props.addPost(formData.newMyPost);
    }
    return <div className={s.postBlock}>
        <h3>MyPosts</h3>
        <div>
            <MyPostReduxForm onSubmit={onSubmit}/>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
};

type PropsTypeForm = {
    handleSubmit:any
    pristine: any
    submitting: any
    reset:any
}

const MyPostsForm: FC<PropsTypeForm> = props => {
    return <form className={s.button} onSubmit={props.handleSubmit}>
        <div>
            <Field name="newMyPost" component={Textarea} placeholder="Enter your post"
                   validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
            <button type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>
                Clear Values
            </button>
        </div>
    </form>
}

const MyPostReduxForm = reduxForm({
    form: "myPostForm"
})(MyPostsForm)

export default MyPosts;