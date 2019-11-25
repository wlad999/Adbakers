import { createSelector } from "reselect";
export const getIsAuth = state => {
  return state.loginPage.isAuth;
};
