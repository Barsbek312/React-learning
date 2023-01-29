import { authAPI } from "../API/API";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    }
}

export const setAuthUserToState = () => (dispatch) => {
    authAPI.me()
        .then(res => {
            if (res.resultCode === 0) {
                let { id, login, email } = res.data;
                dispatch(setAuthUserData(id, login, email));
            }
        }
        )
}



export default authReducer;