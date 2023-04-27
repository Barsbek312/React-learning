import React from 'react';
import { NavLink } from 'react-router-dom';
import headerCss from './Header.module.css';

const Header = (props) => {
    return(
        <header className={headerCss.header}>
        
            <img className={headerCss.header__img} alt="logo-img" src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>

            <div className={headerCss.login__block}>
                {props.isAuth ? <div>{ props.login } - <button onClick={props.logout}>Log out</button> </div> : <NavLink to={"/login"} >Login</NavLink>}
            </div>

        </header>
    );
}

export default Header;