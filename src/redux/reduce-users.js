import { usersAPI } from "../API/API";
import { updateObjectInArray } from "../utils/objects-helper";

const FOLLOW = "network/users/FOLLOW";
const UNFOLLOW = "network/users/UNFOLLOW";
const SET_USERS = "network/users/SET_USERS";
const SET_CURRENT_PAGE = "network/users/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "network/users/SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = 'network/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'network/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 10
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
                usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: true} )

            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, "id", {followed: false})
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
                    : state.followingInProgress.filter(id => id !== action.userId)
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

export const getUsers = (currentPage, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true))
    let res = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(res.items));
    dispatch(setTotalCount(res.totalCount));
    dispatch(setCurrentPage(currentPage)) 
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await apiMethod(userId)
    if (res.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const setFollowToUser = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.postFollow.bind(usersAPI), follow);
}

export const setUnfollowToUser = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.postUnfollow.bind(usersAPI), unfollow);

}

export default userReducer;
