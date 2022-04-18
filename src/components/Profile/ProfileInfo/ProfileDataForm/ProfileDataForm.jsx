import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControl/FormsControl";
import {required} from "../../../../utils/validators/validators";
import s from "../../../common/FormsControl/FormsControl.module.css";
import {Contact, Contacts} from "../ProfileData/ProfileData";

function ProfileDataForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <button>save</button>
        {props.error && <div className={s.errorForm}>{props.error}</div>}
        <div className={s.descriptionBlock}>
            <div>
                <b>Full name:</b> <Field name={"fullName"} component={Input}
                                         validate={[required]}/>
            </div>
            <div>
                <b>About me:</b> <Field name={"aboutMe"} component={Textarea}
                                        validate={[required]}/>
            </div>
            <div>
                <b>looking for a job:</b> <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
            </div>
            <div>
                <b>My skills:</b><Field name={"lookingForAJobDescription"} component={Textarea}
                                         validate={[required]}/>
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profile.contacts)
                .map(key => {
                        return <Contacts contactTitle={key} contactValue={<Field name={`contacts.${key}`} component={Input}/>}/>
                    }
                )}
            </div>
        </div>
    </form>
}

const ProfileReduxDataForm = reduxForm({
    form: 'profileData'
})(ProfileDataForm)

export default ProfileReduxDataForm;