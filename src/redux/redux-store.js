import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./reducers/usersReducer";
import loginReducer from "./reducers/loginReducer";

let reducers = combineReducers({
  usersPage: usersReducer,
  loginPage: loginReducer
});

const enhancer = applyMiddleware(thunkMiddleware);

let store = createStore(reducers, composeWithDevTools(enhancer));
window.store = store;
export default store;
