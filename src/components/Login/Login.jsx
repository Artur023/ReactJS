import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import s from "./../common/FormsControl/FormsControl.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field name={"email"} component={Input} placeholder={"Email"} validate={[required]}/></div>
        <div><Field name={"password"} component={Input} placeholder={"Password"} type={"password"} validate={[required]}/></div>
        <div><Field name={"rememberMe"} component={Input} type={"checkbox"}/>rememberMe</div>
        {error && <div className={s.errorForm}>{error}</div>}
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
        props.login(formData.email, formData.password, formData.rememberMe, formData.isAuth)
    }
    if (props.isAuth)
        return <Navigate to={'/profile'}/>
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = state => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {login, logout})(Login);