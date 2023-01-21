import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching } from "../../redux/reduce-users";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalCount(res.data.totalCount)
            }
            )
    }

    clickFollow = (id) => {
        this.props.follow(id);
    }

    clickUnfollow = (id) => {
        this.props.unfollow(id);
    }

    onClickPage = (currentPage) => {
        this.props.setCurrentPage(currentPage)
    }

    onPageChanged = (page) => {
        this.onClickPage(page)
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items)
            }
            )
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/>
                :
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                    clickFollow={this.clickFollow} clickUnfollow={this.clickUnfollow} users={this.props.users}
                    onPageChanged={this.onPageChanged} />
            }
        </>

    }

}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }

// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
})(UsersContainer);