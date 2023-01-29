import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setFollowToUser, setCurrentPage, toggleFollowingProgress, getUsers, setUnfollowToUser } from "../../redux/reduce-users";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
        this.props.getUsers(page, this.props.pageSize);
        // this.onClickPage(page)
        // this.props.toggleIsFetching(true);
        // usersAPI.getUsers(page, this.props.pageSize)
        //     .then(res => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(res.items)
        //     }
        //     )
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader />
                :
                <Users {...this.props} onPageChanged={this.onPageChanged} clickFollow={this.clickFollow} clickUnfollow={this.clickUnfollow} />
            }
        </>

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

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}

let withRedirect = withAuthRedirect(UsersContainer)

compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    setFollowToUser,
    setUnfollowToUser,
}), withAuthRedirect)(UsersContainer)

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    setFollowToUser,
    setUnfollowToUser,
}), withAuthRedirect)(UsersContainer)