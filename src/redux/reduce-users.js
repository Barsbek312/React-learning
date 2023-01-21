const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {

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
                    if(u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                }),

            }

        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if(u.id === action.userId) {
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

export default userReducer;
