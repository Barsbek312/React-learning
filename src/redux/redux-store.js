import {applyMiddleware, combineReducers, createStore, compose} from 'redux'; 
import authReducer from './auth-reducer';
import messageReducer from './reduce-message';
import profileReducer from './reduce-profile';
import sideBarReducer from './reduce-sidebar';
import userReducer from './reduce-users';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;