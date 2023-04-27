import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreater, removeTextPostActionCreater } from './../../../redux/reduce-profile';
import {connect} from 'react-redux';


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newMessageBody) => {
            dispatch(addPostActionCreater(newMessageBody));
        },
        removeText: () => {
            dispatch(removeTextPostActionCreater());
        }
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;