import React from 'react';
import profileInfoCss from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img className={profileInfoCss.profile__img} src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="profile-img"/>
            </div>
            <div className={profileInfoCss.description__block}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;