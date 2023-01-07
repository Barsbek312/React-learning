import React from 'react';
import postsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, postTxt: 'Вся ебля твоя, Гилфойл', likesCount: 10 },
        { id: 2, postTxt: "Вся ебля твоя, Гилфойл", likesCount: 10 },
        { id: 3, postTxt: 'Вся ебля твоя, Гилфойл', likesCount: 10 },
        { id: 4, postTxt: 'Вся ебля твоя, Гилфойл', likesCount: 10 },
        { id: 5, postTxt: "Вся ебля твоя, Гилфойл", likesCount: 10 },
        { id: 6, postTxt: 'Вся ебля твоя, Гилфойл', likesCount: 10 },
        { id: 7, postTxt: 'Вся ебля твоя, Гилфойл', likesCount: 10 },
        { id: 8, postTxt: "Вся ебля твоя, Гилфойл", likesCount: 10 },
        { id: 9, postTxt: "Вся ебля твоя, Гилфойл", likesCount: 10 },
    ];

    let postsElements = postsData
        .map( (p, index) => <Post key={index} text={p.postTxt} likesCount={p.likesCount}/>);

    return (
        <div className={postsCss.posts__block}>
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="15" rows="5"></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={postsCss.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;