import { loginRequest } from "../../api/request";
import { actionTypes } from "./constants";

export const setAuthUserData = (data, isAuth) => ({
  type: actionTypes.SET_USER_DATA,
  payload: { ...data, isAuth }
});

export const sendLoginData = data => dispatch =>
  loginRequest(data)
    .then(response => {
      if (response && response.status === 200) {
        dispatch(setAuthUserData(JSON.parse(response.config.data), true));
        return response;
      }
      // if (response.status >= 400) {
      return response;
      // }
    })
    .catch(error => console.log(error));
