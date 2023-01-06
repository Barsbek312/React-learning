import React from 'react';
import profileCss from './Post.module.css';

const Post = (props) => {
    return(
        <div className={profileCss.item}>
            {props.text}
            <div>
                <span>{props.count} like</span>
            </div>
        </div>       
    );
}

export default Post;