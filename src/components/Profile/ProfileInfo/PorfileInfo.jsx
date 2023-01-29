import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import profileInfoCss from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return(
        <div>
            <div className={profileInfoCss.img__wrapper}>
                <img className={profileInfoCss.profile__img} src={props.profile.photos.large || "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"}alt="profile-img"/>
            </div>
            <div className={profileInfoCss.description__block}>
                {props.profile.aboutMe}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;