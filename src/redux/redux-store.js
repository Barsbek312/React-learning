import {combineReducers, createStore} from 'redux'; 
import messageReducer from './reduce-message';
import profileReducer from './reduce-profile';
import sideBarReducer from './reduce-sidebar';

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer
})

let store = createStore(reducers);

window.store = store.getState();

export default store;