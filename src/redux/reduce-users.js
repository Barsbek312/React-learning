import { usersAPI } from "../API/API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return {
                ...state,
                usersData: action.users,
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }

        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),

            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return { ...u }
                })
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }

}

export const setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers = (currentPage, pageSize) => (dispatch) => {

    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(res => {

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(res.items));
        dispatch(setTotalCount(res.totalCount));
        dispatch(setCurrentPage(currentPage))

    }
    )

}

export const setFollowToUser = (userId, clickFollow) => (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.postFollow(userId)
        .then(res => {
            if (res.resultCode === 0) {
                clickFollow(userId);
            }
            dispatch(toggleFollowingProgress(false, userId))
        }
        )

}

export const setUnfollowToUser = (userId, clickUnfollow) => (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.postUnfollow(userId)
        .then(res => {
            if (res.resultCode === 0) {
                clickUnfollow(userId);
            }
            dispatch(toggleFollowingProgress(false, userId))
        }
        )

}

export default userReducer;
