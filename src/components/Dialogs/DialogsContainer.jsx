import React from 'react';
import Dialogs from './Dialogs';
import { onMessageChangeActionCreater, addMessageActionCreater } from '../../redux/reduce-message';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.messagesPage,
    }
    
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreater());
        },
        messageChange: (text) => {
            dispatch(onMessageChangeActionCreater(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;