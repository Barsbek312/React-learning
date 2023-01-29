import React from "react";
import User from "./User/User";
import usersCss from "./Users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <h2>Users</h2>
            {
                props.users.map(u => {
                    return (
                        <User key={u.id} u={u} {...props} />
                    )
                })
            }
            <div>
                {
                    pages.map(page => {
                        return <button key={page} onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page ? usersCss.selectedPage : null}>{page}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Users;