import React from 'react';
import {Field, reduxForm} from "redux-form";

const DialogsForm = props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newMessage"}
                   component={"textarea"}
                   placeholder={"Enter your message"}
            />
        </div>
        <div>
            <button type={"submit"}>Add message</button>
        </div>
    </form>
}

export const DialogReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm)



