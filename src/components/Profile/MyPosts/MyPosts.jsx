import React from 'react';
import postsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postsElements = props.posts
        .map( (p, index) => <Post key={index} text={p.postTxt} likesCount={p.likesCount}/>);

    function onAddPost() {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let onClickRemove = () => {
        props.removeText();
    }

    return (
        <div className={postsCss.posts__block}>
            <h3> my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                    <button onClick={onClickRemove}>Remove</button>
                </div>
            </div>
            <div className={postsCss.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;