import React from 'react';
import messageCss from './Message.module.css';

const Message = (props) => {
    return (
        <div className={messageCss.message}>
            {props.message}
        </div>
    );
}

export default Message;