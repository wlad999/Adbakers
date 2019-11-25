import { getUsersRequest, getUserDataRequest } from "../../api/request";
import { actionTypes } from "./constants";

export const getUsersAC = data => ({
  type: actionTypes.GET_USERS,
  users: data.data,
  totalUsers: data.total
});

export const setUserDataAC = userData => ({
  type: actionTypes.SET_USER_DATA,
  userData
});
export const currentPageAC = currentPage => ({
  type: actionTypes.SET_CARRENT_PAGE,
  currentPage
});
export const getUsersOnPageThunk = currentPage => {
  return dispatch => {
    getUsersRequest(currentPage).then(response => {
      dispatch(getUsersAC(response.data));
    });
  };
};
export const getUserDataThunk = id => {
  return dispatch => {
    getUserDataRequest(id).then(response => {
      dispatch(setUserDataAC(response.data));
    });
  };
};
