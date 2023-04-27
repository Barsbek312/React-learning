import React from 'react';
import { reduxForm } from 'redux-form';
import { required, maxLengthCreator, minLengthCreator } from './../../../../utils/validators/validators';
import { createField, textArea } from './../../../common/FormsControls/FormsControls';

const maxLength = maxLengthCreator(15);
const minLength = minLengthCreator(2);

const MyPostsForm = ({handleSubmit, onAddPost}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Post message", "newPostText", [required, maxLength, minLength], textArea )}
            <div>
                <button onClick={onAddPost}>Add Post</button>
                {/* <button onClick={onClickRemove}>Remove</button> */}
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'posts'
})(MyPostsForm)