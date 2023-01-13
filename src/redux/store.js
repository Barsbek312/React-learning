import messageReducer from "./reduce-message";
import profileReducer from "./reduce-profile"; 
import sideBarReducer from "./reduce-sidebar";

// unused native redux

let store = {
    _state: {
        messagesPage: {
            newMessageText: "",
            dialogsData: [
                { id: 1, name: 'Миррахим' },
                { id: 2, name: 'Байэл' },
                { id: 3, name: 'Эльдияр' },
                { id: 4, name: 'Дастан' },
                { id: 5, name: 'Адиль' }
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: "What's up" },
                { id: 3, message: 'Something' },
            ],
        },
        profilePage: {
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
                { id: 9, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
                
            ]
        },
        sideBar: {

        }
    },
    _callSubscriber() {
        console.log('Rerender changed');
    },

    getState() {
        return this._state; 
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;