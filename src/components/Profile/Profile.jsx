import React from 'react';
import profileCss from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/PorfileInfo';

const MainContent = (props) => {
    return(
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div> 
    );
}

export default MainContent;
