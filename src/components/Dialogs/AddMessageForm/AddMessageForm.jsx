import React from 'react'
import { reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../../utils/validators/validators';
import { createField, textArea } from './../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(50);
const minLength = minLengthCreator(2);

const AddMessageForm = ({handleSubmit}) => {
    
    return (
        <form onSubmit={handleSubmit}>
            {createField("Enter your message", "newMessageText", [required, maxLength, minLength], textArea)}
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
    
}

export default reduxForm({
    form: 'dialogs'
})(AddMessageForm)