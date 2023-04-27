import { profileAPI } from "../API/API";

const ADD_POST = "network/profile/ADD_POST";
const REMOVE_TEXT = "network/profile/REMOVE_TEXT";
const SET_USER_PROFILE = "network/profile/SET_USER_PROFILE";
const SET_STATUS = "network/profile/SET_STATUS";
const DELETE_POST = "network/profile/DELETE_POST";

let initialState = {
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
                postTxt: action.newMessageBody,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
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
        case DELETE_POST:
            return{
                ...state,
                postsData: state.postsData.filter(item => item.id != action.postId)
            }

        default: {
            return { ...state };
        }
    }

}

export const addPostActionCreater = (newMessageBody) => {
    return (
        {
            type: ADD_POST,
            newMessageBody
        }
    )
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

export const deletePost = (postId) => {
    return{
        type: DELETE_POST,
        postId
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getAndSetUserProfile = (userId) => async (dispatch) => {
    let res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res))
}


export const getStatus = (userId) => async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res))

}

export const updateStatus = (status) => async (dispatch) => {
    let res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }

}



export default profileReducer;