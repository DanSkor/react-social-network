import me from '../img/me.webp';
import avatar from '../img/ava.jpg';
import hren from '../img/hren.png';
import gandalf from '../img/gandalf.jpg';
import { getApiProfile, getApiStatus, updateApiStatus } from '../api/api';

const ADD_POST = 'ADD-POST';
// const UPDATE_INPUT_PROFILE = 'UPDATE-INPUT-PROFILE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, name: 'Ivan Petrov', comment: 'Hello my friends!', likesCount: 6, image: avatar},
        {id: 2, name: 'Hren s Gory', comment: 'Hell yeahh', likesCount: 52, image: hren},
        {id: 3, name: 'Gandalf', comment: 'You will not pass!', likesCount: 686, image: gandalf},
    ],
    // inputTextValue: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newMessage = {
                id: state.postsData.length++,
                name: 'Me',
                comment: action.newPostText,
                likesCount: 0,
                image: me,
            };
            return {
                ...state,
                postsData: [...state.postsData, newMessage]
            }
        }
        // case UPDATE_INPUT_PROFILE: {
        //     let stateCopy = Object.assign({}, state)
        //     stateCopy.inputTextValue = action.symbols;
        //     return stateCopy;
        // }
        case SET_USER_PROFILE: {
           return {
            ...state,
            profile: action.profile,
           }
        }
        case SET_STATUS: {
           return {
            ...state,
            status: action.status,
           }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})

// export const updateInputProfileActionCreator = (text) => ({
//     type: UPDATE_INPUT_PROFILE,
//     symbols: text,
// })

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const getProfile = (userId) => {

    return (dispatch) => {
        getApiProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getStatus = (userId) => {

    return (dispatch) => {
        getApiStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        })
    }
}

export const updateStatus = (status) => {

    return (dispatch) => {
        updateApiStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default profileReducer;
