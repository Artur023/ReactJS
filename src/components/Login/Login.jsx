import React from 'react';
import {Field, reduxForm} from "redux-form";
import {authAPI} from "../../api/api";

const LoginForm = props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"email"} component={"input"} placeholder={"email"}/>
        </div>
        <div>
            <Field name={"password"} component={"input"} placeholder={"Password"}/>
        </div>
        <div>
            <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me
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
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;