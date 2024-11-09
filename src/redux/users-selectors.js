import { createSelector } from "reselect";

const getUsersSuperSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSuperSelector, (users) => {
    return users.filter(user => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getInProgress = (state) => {
    return state.usersPage.inProgress;
}