import React from 'react';
import profileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/PorfileInfo';

const MainContent = (props) => {
    return(
        <div>
            <ProfileInfo/>
            <MyPosts addNewText={props.addNewText} postsData={props.localState.postsData} addPost={props.addPost} newPostText={props.localState.newPostText}/>
        </div> 
    );
}

export default MainContent;
