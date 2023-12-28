import { accessToken } from "../../const/localStorage";
import { userUrl } from "../../const/url";
import apiCall from "../apiCall";

//login
export const userLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    apiCall("post", userUrl.login, { email, password })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//signup
export const signup = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    apiCall("post", userUrl.signup, { name, email, password })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//fetch
export const getUser = () => {
  return new Promise((resolve, reject) => {
    apiCall("get", userUrl.get, {heasers: {Autherization: localStorage.getItem(accessToken)}})
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
