import { getApiProfile, getApiUsers, getFollow, getUnfollow } from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERSCOUNT = 'users/SET_TOTAL_USERSCOUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    inProgress: [],
    portionSize: 7,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users],
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERSCOUNT: {
            return {
                ...state,
                totalUsersCount: action.count,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFething,
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                inProgress: action.inProgress
                    ? [...state.inProgress, action.userId]
                    : state.inProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERSCOUNT, count: totalUsersCount });
export const toggleIsFetching = (isFething) => ({ type: TOGGLE_IS_FETCHING, isFething });
export const toggleFollowingProgress = (inProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, inProgress, userId });

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        
        let response = await getApiUsers(currentPage, pageSize);
           
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
     
    }
}

export const follow = (userId) => {

    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));

        let response = await getFollow(userId);
        if (response.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
        dispatch(toggleFollowingProgress(false, userId));

        // getApiProfile(userId).then(user => {
        //     console.log(user)
        // })
    }
}

export const unfollow = (userId) => {
    
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await getUnfollow(userId);
        if (response.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
}

export default usersReducer;
