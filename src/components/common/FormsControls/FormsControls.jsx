import React from 'react';
import form from './FormsControls.module.css';
import { Field } from 'redux-form';

export const FormControl = ({ input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={form.form__control + ' ' + (hasError ? form.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const textArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field name={name} 
                placeholder={placeholder} 
                component={component} 
                validate={validators}
                {...props}/>{text}
        </div>
    )
}
