import React from "react";
import { NavLink } from "react-router-dom";
import userCss from './User.module.css';

const User = ({u, followingInProgress, setFollowToUser, setUnfollowToUser}) => {

    const onClickFollow = () => {
        setFollowToUser(u.id);
    }

    const onClickUnfollow = () => {
        setUnfollowToUser(u.id);
    }

    return (
        <div className={userCss.info__block}>
            <div className={userCss.ava__block}>
                <div className={userCss.img__block}>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : "https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg"} alt="avatar" />
                    </NavLink>
                </div>
                {
                    u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={onClickUnfollow}> Unfollow </button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={onClickFollow}> Follow </button>
                }
            </div>
            <div className={userCss.text__block}>
                <div className={userCss.text__left}>
                    <h3>
                        {u.name}
                    </h3>
                    <p>
                        {u.status}
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