import userAva from '../img/user-ava.jpg'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, isFollow: true, fullname: 'Vasiliy Balalaikin', status: 'Ебу твои принципы в принципе', location: {city: 'Minsk', country: 'Belarus'}, image: userAva},
        {id: 2, isFollow: false, fullname: 'Petr Herov', status: 'Пей пиво, ешь мясо', location: {city: 'New York', country: 'USA'}, image: userAva},
        {id: 3, isFollow: true, fullname: 'Harry Potter', status: 'Lumus', location: {city: 'London', country: 'UK'}, image: userAva},
        {id: 4, isFollow: false, fullname: 'Naruto Udzumaki', status: 'Даттебайо', location: {city: 'Tuman', country: 'List'}, image: userAva},
    ],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, isFollow: true}
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
                        return {...user, isFollow: false}
                    }
                    return user;
                })
            }

        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users],
            }

        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC= (users) => ({type: SET_USERS, users});

export default usersReducer;
