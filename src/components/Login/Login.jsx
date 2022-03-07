import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";

const LoginForm = props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"email"} component={Input} placeholder={"email"} validate={[required]}/>
        </div>
        <div>
            <Field name={"password"} component={Input} placeholder={"Password"} validate={[required]}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={Input} type={"checkbox"} /> remember me
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </form>

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = props => {

    let onSubmit = (formData) => {
        authAPI.login(formData)
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;