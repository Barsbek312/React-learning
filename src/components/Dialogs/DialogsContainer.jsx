import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreater } from '../../redux/reduce-message';
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
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreater(newMessageBody));
        }
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);