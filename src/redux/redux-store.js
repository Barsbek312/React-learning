import {applyMiddleware, combineReducers, createStore} from 'redux'; 
import authReducer from './auth-reducer';
import messageReducer from './reduce-message';
import profileReducer from './reduce-profile';
import sideBarReducer from './reduce-sidebar';
import userReducer from './reduce-users';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;