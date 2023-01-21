import {combineReducers, createStore} from 'redux'; 
import messageReducer from './reduce-message';
import profileReducer from './reduce-profile';
import sideBarReducer from './reduce-sidebar';
import userReducer from './reduce-users';

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: userReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;