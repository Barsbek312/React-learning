import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogsCss from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={dialogsCss.dialog + ' ' + dialogsCss.active}>
            <NavLink to={`/dialogs/${props.idDialog}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={dialogsCss.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    let dialogsData = [
        {
            id: 1,
            name: 'Миррахим',
        },
        {
            id: 2,
            name: 'Байэл',
        },
        {
            id: 3,
            name: 'Эльдияр',
        },
        {id: 4, name: 'Дастан'},
        {id: 5, name: 'Адиль'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's up"},
        {id: 3, message: 'Something'}
    ];

    let dialogsElements = dialogsData   
        .map( (d, index) =>  <DialogItem key={index} idDialog={d.id} name={d.name} />)

    let messagesElements = messagesData
        .map( (m, index) =>  <Message key={index} message={m.message} />)

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;