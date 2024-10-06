import {combineReducers, legacy_createStore as createStore} from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navBar: navbarReducer,
})

let store = createStore(reducers);

export default store;
