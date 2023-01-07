import React from 'react';
import profileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/PorfileInfo';

const MainContent = () => {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div> 
    );
}

export default MainContent;