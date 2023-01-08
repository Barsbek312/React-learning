import React from 'react';
import postsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map( (p, index) => <Post key={index} text={p.postTxt} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef()

    function addPost() {
        console.log(newPostElement.current.value);
    }

    return (
        <div className={postsCss.posts__block}>
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="15" rows="5" ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
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