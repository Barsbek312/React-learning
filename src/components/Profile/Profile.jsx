import React from 'react';
import profileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/PorfileInfo';

const MainContent = (props) => {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.localState.postsData}/>
        </div> 
    );
}

export default MainContent;