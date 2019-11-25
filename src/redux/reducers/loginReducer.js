import { actionTypes } from "../action/constants";

let initialState = {
  userId: null,
  email: null,
  password: null,
  isAuth: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default loginReducer;
