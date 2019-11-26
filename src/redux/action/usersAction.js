import { getUsersRequest, getUserDataRequest } from "../../api/request";
import { actionTypes } from "./constants";

export const toggleIsFetching = isFetching => ({
  type: actionTypes.IS_FETCH,
  isFetching
});

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
    dispatch(toggleIsFetching(true));
    getUsersRequest(currentPage).then(response => {
      dispatch(getUsersAC(response.data));
      dispatch(toggleIsFetching(false));
    });
  };
};
export const getUserDataThunk = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    getUserDataRequest(id).then(response => {
      dispatch(setUserDataAC(response.data));
      dispatch(toggleIsFetching(false));
    });
  };
};
