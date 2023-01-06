import React from 'react';
import profileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const MainContent = () => {
    return(
        <div>
            <div>
                <img className={profileCss.profile__img} src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="profile-img"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default MainContent;