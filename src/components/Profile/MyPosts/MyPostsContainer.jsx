import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreater, onPostChangeActionCreater, removeTextPostActionCreater } from './../../../redux/reduce-profile';
import {connect} from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreater(text));
        },
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        removeText: () => {
            dispatch(removeTextPostActionCreater());
        }
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;