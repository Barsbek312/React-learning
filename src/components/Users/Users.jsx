import React from "react";
import User from "./User/User";
import usersCss from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";

const Users = ({currentPage, totalUsersCount, pageSize, users, onPageChanged, followingInProgress, portionSize, ...props}) => {
    return (
        <div>
            <h2>Users</h2>
            {
                users.map(u => {
                    return (
                        <User key={u.id} u={u} 
                        followingInProgress={followingInProgress} 
                        setFollowToUser={props.setFollowToUser} 
                        setUnfollowToUser={props.setUnfollowToUser} />
                    )
                })
            }
            <Paginator currentPage={currentPage} 
                    totalItemsCount={totalUsersCount} 
                    pageSize={pageSize}
                    onPageChanged={onPageChanged}
                    portionSize={portionSize}/>
        </div>
    )
}

export default Users;