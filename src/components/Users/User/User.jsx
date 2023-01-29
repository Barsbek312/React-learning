import React from "react";
import { NavLink } from "react-router-dom";
import userCss from './User.module.css';

const User = (props) => {

    const onClickFollow = () => {
        props.setFollowToUser(props.u.id, props.clickFollow);
    }

    const onClickUnfollow = () => {
        props.setUnfollowToUser(props.u.id, props.clickUnfollow);
    }

    return (
        <div className={userCss.info__block}>
            <div className={userCss.ava__block}>
                <div className={userCss.img__block}>
                    <NavLink to={"/profile/" + props.u.id}>
                        <img src={props.u.photos.small !== null ? props.u.photos.small : "https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg"} alt="avatar" />
                    </NavLink>
                </div>
                {
                    props.u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={onClickUnfollow}> Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={onClickFollow}> Follow </button>
                }
            </div>
            <div className={userCss.text__block}>
                <div className={userCss.text__left}>
                    <h3>
                        {props.u.name}
                    </h3>
                    <p>
                        {props.u.status}
                    </p>
                </div>
                <div className={userCss.text__right}>
                    <h3>
                        {"props.u.location.city"}
                    </h3>
                    <h3>
                        {"props.u.location.country"}
                    </h3>
                </div>
            </div>
        </div>
    );

}

export default User;