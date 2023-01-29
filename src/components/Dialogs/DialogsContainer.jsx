import React from 'react';
import Dialogs from './Dialogs';
import { onMessageChangeActionCreater, addMessageActionCreater } from '../../redux/reduce-message';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

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


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect, withAuthRedirect)(Dialogs);