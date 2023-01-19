import React from "react";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/reduce-users";
import Users from "./Users";


const mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.usersData
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }

} 

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;