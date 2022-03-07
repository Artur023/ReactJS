import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const DialogsForm = props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newMessage"}
                   component={Textarea}
                   placeholder={"Enter your message"}
                   validate={[required, maxLength50]}
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



