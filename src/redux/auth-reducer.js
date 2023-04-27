import { authAPI } from "../API/API";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "network/auth/SET_USER_DATA";


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
                ...action.payload,
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId, email, login, isAuth
        }
    }
}

export const setAuthUserToState =  () => async (dispatch) => {
    let res = await authAPI.me();
    if (res.resultCode === 0) {
        let { id, login, email } = res.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe);
    console.log(res);
    if (res.resultCode === 0) {
        dispatch(setAuthUserToState());
    } else {
        let message = res.messages.length > 0 ? res.messages : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}




export default authReducer;