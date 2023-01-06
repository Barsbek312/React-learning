import React from 'react';
import { NavLink } from 'react-router-dom';
import dialogsCss from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
      <div className={dialogsCss.dialogs}>
          <div className={dialogsCss.dialogs__items}>
            <div className={dialogsCss.dialog + ' ' + dialogsCss.active}>
                <NavLink to="/dialogs/1">Миррахим</NavLink> 
            </div>
            <div className={dialogsCss.dialog}>
                <NavLink to="/dialogs/2">Байэл</NavLink> 
            </div>
            <div className={dialogsCss.dialog}>
                <NavLink to="/dialogs/3">Эльдияр</NavLink> 
            </div>
            <div className={dialogsCss.dialog}>
                <NavLink to="/dialogs/4">Дастан</NavLink> 
            </div>
            <div className={dialogsCss.dialog}>
                <NavLink to="/dialogs/5">Адиль</NavLink> 
            </div>
          </div>
          <div className={dialogsCss.messages}>
                <div className={dialogsCss.message}>
                    HI
                </div>
                <div className={dialogsCss.message}>
                    What's up
                </div>
                <div className={dialogsCss.message}>
                    Something
                </div>
          </div>
      </div>  
    );
}


export default Dialogs;