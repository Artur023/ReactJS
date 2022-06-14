import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getCaptchaUrl, login, logout} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
// @ts-ignore
import s from "./../common/FormsControl/FormsControl.module.css"
import {AppStateType} from "../../redux/reduxStore";

type LoginFormOwnProps = {
    captcha: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, ...props}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field name={"email"} component={Input} placeholder={"Email"} validate={[required]}/></div>
        <div><Field name={"password"} component={Input} placeholder={"Password"} type={"password"}
                    validate={[required]}/></div>
        <div><Field name={"rememberMe"} component={Input} type={"checkbox"}/>rememberMe</div>
        {error && <div className={s.errorForm}>{error}</div>}
        <div>
            {props.captcha && <img src={props.captcha}></img>}
        </div>
        <div>
            {props.captcha && <Field name={"captcha"} component={Input} validate={[required]}
                                     placeholder={"Enter from the picture"}/>}
        </div>
        <div>
            <button type={"submit"}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormValuesType & LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    captcha: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, isAuth: boolean, captcha: string) => void
}
type LoginFormValuesType = {
    captcha: string
    isAuth: boolean
    rememberMe: string
    password: string
    email: string

}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = props => {
    let onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, Boolean(formData.rememberMe), formData.isAuth, formData.captcha)
    }
    if (props.isAuth)
        return <Navigate to={'/profile'}/>
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} {...props}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl
})
export default connect(mapStateToProps, {logout, login, getCaptchaUrl})(Login);