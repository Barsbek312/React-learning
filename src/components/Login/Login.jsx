import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"Login"} component={"input"}/>
            </div>

            <div>
                <Field name={"password"} placeholder={"Password"} type="" component={"input"}/>
            </div>

            <div>
                <Field name={"rememberMe"} type="checkbox" component={"input"}/> remember me
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>

    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    return (
        <div>

            <h1>Login</h1>

            <LoginReduxForm />

        </div>
    );
}

export default Login;