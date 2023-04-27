import React from 'react';
import postsCss from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from './AddPostForm/AddPostForm';


const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map((p, index) => <Post key={index} text={p.postTxt} likesCount={p.likesCount} />);

    function onAddPost(values) {
        props.addPost(values.newPostText);
        values.newPostText = '';
    }

    let onClickRemove = () => {
        props.removeText();
    }

    return (
        <div className={postsCss.posts__block}>
            <h3> my posts</h3>
            <AddPostForm onSubmit={onAddPost} />
            <div className={postsCss.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;