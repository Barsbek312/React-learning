import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Navigate } from "react-router-dom";


const Login = (props) => {
    
    const onSubmit = (data) => {
        props.login(data.login, data.password, data.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    
    return (
        <div>

            <h1>Login</h1>

            <LoginForm onSubmit={onSubmit}/>

        </div>
    );
}

export default Login;