import React from "react";
import { connect } from "react-redux";
import { setFollowToUser, setCurrentPage, toggleFollowingProgress, getUsers, setUnfollowToUser } from "../../redux/reduce-users";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getUsersData, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getPortionSize } from './../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {pageSize} = this.props
        this.props.getUsers(page, pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader />
                :
                <Users {...this.props} 
                    onPageChanged={this.onPageChanged} 
                    setFollowToUser={this.props.setFollowToUser} 
                    setUnfollowToUser={this.props.setUnfollowToUser} 
                    portionSize={this.props.portionSize}
                    />
            }
        </>

    }

}

const mapStateToProps = (state) => {

    return {
        users: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
    }

}

export default compose(connect(mapStateToProps, {
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    setFollowToUser,
    setUnfollowToUser,
}))(UsersContainer)