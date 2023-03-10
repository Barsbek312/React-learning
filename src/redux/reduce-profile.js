import { usersAPI } from "../API/API";
import { profileAPI } from "../API/API";

const ADD_POST = "ADD_POST";
const ADD_NEW_POST_TEXT = "ADD_LETTER_ON_NEW_POST_TEXT";
const REMOVE_TEXT = "REMOVE_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    newPostText: 'it-Bars.com',
    postsData: [
        { id: 1, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
        { id: 2, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
        { id: 3, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
        { id: 4, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
        { id: 5, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
        { id: 6, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
        { id: 7, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
        { id: 8, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
        { id: 9, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                postTxt: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case ADD_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case REMOVE_TEXT: {
            return {
                ...state,
                newPostText: '',
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }

        default: {
            return { ...state };
        }
    }

}

export const addPostActionCreater = () => {
    return (
        {
            type: ADD_POST,
        }
    )
}

export const onPostChangeActionCreater = (text) => {
    return {
        type: ADD_NEW_POST_TEXT,
        newText: text,
    }
}

export const removeTextPostActionCreater = () => {
    return {
        type: REMOVE_TEXT,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getAndSetUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res))
        }
        )
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getStatus = (userId) => (dispatch) => {

    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res))
        })

}

export const updateStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })

}

export default profileReducer;