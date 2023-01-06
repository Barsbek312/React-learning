import React from 'react';
import profileCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return(
        <div>
            my posts
            <div>
                <textarea name="" id="" cols="15" rows="5"></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={profileCss.posts}>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count="10"/>
                <Post text="Вся ебля твоя, Гилфойл" count={15}/>
            </div>
        </div>
    );
}

export default MyPosts;