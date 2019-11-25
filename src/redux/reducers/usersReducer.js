import { actionTypes } from "../action/constants";

let initialState = {
  users: [],
  totalUsers: 0,
  currentPage: 1,
  userData: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        users: action.users,
        totalUsers: action.totalUsers
      };

    case actionTypes.SET_CARRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData
      };

    default:
      return state;
  }
};

export default usersReducer;
