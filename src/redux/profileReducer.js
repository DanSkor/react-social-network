import me from '../img/me.webp';
import avatar from '../img/ava.jpg';
import hren from '../img/hren.png';
import gandalf from '../img/gandalf.jpg';
import { getApiProfile, getApiStatus, savePhotoApi, updateApiStatus } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, name: 'Ivan Petrov', comment: 'Hello my friends!', likesCount: 6, image: avatar},
        {id: 2, name: 'Hren s Gory', comment: 'Hell yeahh', likesCount: 52, image: hren},
        {id: 3, name: 'Gandalf', comment: 'You will not pass!', likesCount: 686, image: gandalf},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newMessage = {
                id: state.postsData.length,
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
        case DELETE_POST: {
           return {
            ...state,
            postsData: state.postsData.filter(post => post.id !== action.id),
           }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
             ...state,
             profile: {...state.profile, photos: action.photos},
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

export const deletePost = (id) => ({
    type: DELETE_POST,
    id
})

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

export const getProfile = (userId) => {

    return async (dispatch) => {
        let response = await getApiProfile(userId);
        dispatch(setUserProfile(response));
    }
}

export const getStatus = (userId) => {

    return async (dispatch) => {
        let response = await getApiStatus(userId);
        dispatch(setStatus(response));
    }
}

export const updateStatus = (status) => {

    return async (dispatch) => {
        let response = await updateApiStatus(status);
        console.log(response)
        if (response.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const savePhoto = (file) => {

    return async (dispatch) => {
        let response = await savePhotoApi(file);
        console.log(response)
        if (response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos));
        }
    }
}

export default profileReducer;
