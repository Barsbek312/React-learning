import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage

    let textOfMessage = React.createRef();

    let dialogsElements = state.dialogsData
        .map((d, index) => <DialogItem key={index} idDialog={d.id} name={d.name} />)

    let messagesElements = state.messagesData
        .map((m, index) => <Message key={index} message={m.message} />)

    const onAddMessage = () => {
        props.addMessage();
    }

    const onMessageChange = () => {
        let text = textOfMessage.current.value;
        props.messageChange(text);
    }

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onMessageChange} placeholder='Enter your message' value={state.newMessageText} ref={textOfMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;