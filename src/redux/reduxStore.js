import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
