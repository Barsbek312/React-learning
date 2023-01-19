import axios from "axios";
import React from "react";
import User from "./User/User";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => 
                {
                    props.setUsers(res.data.items)
                }
            )
        }
    }

    const clickFollow = (id) => {
        props.follow(id);
    }

    const clickUnfollow = (id) => {
        props.unfollow(id);
    }
    return (
        <div>
            <button onClick={getUsers}>Click</button>
            <h2>Users</h2>
            {
                props.users.map(u => {
                    return (
                        <User key={u.id} u = {u} clickFollow={clickFollow} clickUnfollow={clickUnfollow}/>
                    )
                })
            }
        </div>
    );
}

export default Users;