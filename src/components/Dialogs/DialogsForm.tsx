import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
// @ts-ignore
import s from "../Profile/MyPosts/MyPosts.module.css";

const maxLength50 = maxLengthCreator(50)
const DialogsForm = (props) => {
    return <form className={s.button} onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newMessage"}
                   component={Textarea}
                   placeholder={"Enter your message"}
                   validate={[required, maxLength50]}
            />
        </div>
        <div>
            <button type="submit">Add message</button>
            <button type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>
                Clear Values
            </button>
        </div>
    </form>
}

export const DialogReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm)



