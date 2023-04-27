import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData
        .map((d, index) => <DialogItem key={index} idDialog={d.id} name={d.name} />)

    let messagesElements = state.messagesData
        .map((m, index) => <Message key={index} message={m.message} />)

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
        values.newMessageText = '';
    }


    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage} { ...props }/>  
            </div>
        </div>
    );

}


export default Dialogs;