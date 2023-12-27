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
