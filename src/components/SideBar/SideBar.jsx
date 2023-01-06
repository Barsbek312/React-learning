import React from 'react';
import sideCss from './SideBar.module.css';

const SideBar = () => {
    return(
        <nav className={sideCss.nav}>
            <ul>
                <li className={sideCss.item}><a href="">Profile</a></li>
                <li className={sideCss.item}><a href="">Messages</a></li>
                <li className={sideCss.item}><a href="">News</a></li>
                <li className={sideCss.item}><a href="">Music</a></li>
                <li className={sideCss.item}><a href="">Settings</a></li>
            </ul>
        </nav>
    );
}

export default SideBar;