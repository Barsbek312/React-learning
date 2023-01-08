import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.localState.dialogsData
        .map((d, index) => <DialogItem key={index} idDialog={d.id} name={d.name} />)

    let messagesElements = props.localState.messagesData
        .map((m, index) => <Message key={index} message={m.message} />)

    let textOfMessage = React.createRef();

    function addMessage() {
        console.log(textOfMessage.current.value);
    }

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                {messagesElements}
                <div>
                    <textarea name="" id="" cols="30" rows="3" ref={textOfMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;