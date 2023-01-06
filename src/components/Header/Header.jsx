import React from 'react';
import headerCss from './Header.module.css';

const Header = () => {
    return(
        <header className={headerCss.header}>
            <img className={headerCss.header__img} alt="logo-img" src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
        </header>
    );
}

export default Header;