import React from 'react';
import { NavLink } from 'react-router-dom';
import sideCss from './SideBar.module.css';

const SideBar = () => {
    return(
        <nav className={sideCss.nav}>
            <ul>
                <li className={sideCss.item}><NavLink className={navData => navData.isActive? sideCss.active : sideCss.item__link} to="/profile">Profile</NavLink></li>
                <li className={sideCss.item}><NavLink className={navData => navData.isActive? sideCss.active : sideCss.item__link} to="/dialogs">Messages</NavLink></li>
                <li className={sideCss.item}><NavLink className={navData => navData.isActive? sideCss.active : sideCss.item__link} to="">News</NavLink></li>
                <li className={sideCss.item}><NavLink className={navData => navData.isActive? sideCss.active : sideCss.item__link} to="">Music</NavLink></li>
                <li className={sideCss.item}><NavLink className={navData => navData.isActive? sideCss.active : sideCss.item__link} to="">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default SideBar;