import axios from "axios";
import { accessToken } from "../../const/localStorage";
import { userUrl } from "../../const/url";
import apiCall from "../apiCall";
import { tokenRefresh } from "./auth-methods";

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
    axios.get(userUrl.get, {headers: {Autherization: localStorage.getItem(accessToken)}})
      .then((response) => {
        resolve(response);
        console.log('hello');
      })
      .catch((err) => {
        if(err.response.status === 401){
          tokenRefresh(err)
            .then((response) => {
              resolve(response);
            })
            .catch((err) => {
              localStorage.clear();
              window.location.reload("/login");
            });
        } else {
          reject(err);
        }
      });
  });
};
