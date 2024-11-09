import { getAuthData, getAuthLogin, getAuthLogout } from "../api/api";

const SET_USER_DATA = 'ADD_SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth},
})

export const authorization = () => {

    return (dispatch) => {

            return getAuthData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {

    return (dispatch) => {
             getAuthLogin(email, password, rememberMe)
                .then(data => {
            if (data.resultCode === 0) {
               dispatch(authorization())
            }
        })
    }
}

export const logout = () => {

    return (dispatch) => {
             getAuthLogout()
                .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;
