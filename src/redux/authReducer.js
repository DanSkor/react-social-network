import { getAuthData, getAuthLogin, getAuthLogout } from "../api/api";

const SET_USER_DATA = 'auth/ADD_SET_USER_DATA';

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

    return async (dispatch) => {

            let response = await getAuthData();

            if (response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
    }
}

export const login = (email, password, rememberMe) => {

    return async (dispatch) => {
            let response = await getAuthLogin(email, password, rememberMe);
              
            if (response.resultCode === 0) {
               dispatch(authorization())
            }
    }
}

export const logout = () => {

    return async (dispatch) => {
            let response = await getAuthLogout();
              
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    }
}

export default authReducer;
