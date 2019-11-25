// import { createSelector } from "reselect";
export const getAllUsers = state => {
  return state.usersPage.users;
};
export const getTotalUsers = state => {
  return state.usersPage.totalUsers;
};
export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};
export const getUserData = state => {
  return state.usersPage.userData;
};
