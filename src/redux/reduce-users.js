const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
    usersData: []
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_USERS:
            return {
                ...state,
                usersData: action.users,
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

        default: 
            return state
    }

} 

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export default userReducer;
