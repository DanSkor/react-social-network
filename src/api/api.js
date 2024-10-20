import axios from "axios"

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';

export const getApiUsers = (currentPage, pageSize) => {
    return axios.get(BASE_URL + `users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => response.data)
};

export const getApiProfile = (userId) => {
    return axios.get(BASE_URL + 'profile/' + userId)
            .then(response => response.data)
};

export const getAuthData = () => {
    return axios.get(BASE_URL + `auth/me/`, {withCredentials: true})
            .then(response => response.data)
};

export const getFollow = (id) => {
    return axios.post(BASE_URL + 'follow/' + id,
        {},
        {
            withCredentials: true,
            headers: {'API-KEY': '55bc9523-1d91-4584-a2d8-afd097d20a45'}
        })
        .then(response => response.data)
}

export const getUnfollow = (id) => {
    return axios.delete(BASE_URL + 'follow/' + id,
        {
            withCredentials: true,
            headers: {'API-KEY': '55bc9523-1d91-4584-a2d8-afd097d20a45'}
        })
        .then(response => response.data)
}