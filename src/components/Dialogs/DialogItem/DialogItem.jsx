import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogItemCss from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={dialogItemCss.dialog + ' ' + dialogItemCss.active}>
            <NavLink className={navData => navData.isActive ? dialogItemCss.active : dialogItemCss.dialog__item} to={`/dialogs/${props.idDialog}`}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;