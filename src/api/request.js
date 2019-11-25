import * as Axios from "axios";
import * as api from "./api";

Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.get["Content-Type"] = "application/json";
Axios.defaults.headers.put["Content-Type"] = "application/json";

export const getUsersRequest = currentPage => {
  return Axios.get(api.url.usersOnPage(currentPage))
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp;
    })
    .catch(error => console.log(error));
};

export const getUserDataRequest = id => {
  return Axios.get(api.url.userData(id))
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp.data;
    })
    .catch(error => console.log(error));
};

export const loginRequest = data => {
  return Axios.post(api.url.login(), data)
    .then(resp => {
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp;
    })
    .catch(error => console.log(error));
};
