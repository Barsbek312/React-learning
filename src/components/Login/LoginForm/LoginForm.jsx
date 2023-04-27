import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, minLengthCreator, required } from "../../../utils/validators/validators";
import { FormControl, Input, createField } from "./../../common/FormsControls/FormsControls";
import style from "./../../common/FormsControls/FormsControls.module.css";

const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2);

const LoginForm = ({handleSubmit, error}) => {
    
    return (
    
        <form onSubmit={handleSubmit}>

            {createField("Login", "login", [required, maxLength30, minLength2], Input)}
            {createField("Password", "password", [required, maxLength30, minLength2], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {error && <div className={style.form__summary_error}>
                {error}
            </div>}

            <div>
                <button>Login</button>
            </div>

        </form>

    );
};

export default reduxForm({
    form: 'login'
})(LoginForm);