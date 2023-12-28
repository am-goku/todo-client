import axios from "axios";
import { accessToken, refreshToken } from "../../const/localStorage";
import { BASE_URL } from "../../const/site";
import { authUrl } from "../../const/url";

//auth methods
export const tokenRefresh = (error) => {
  return new Promise((resolve, reject) => {
    try {
      if (error.response.status === 401) {
        const refresh = localStorage.getItem(refreshToken);

        if (refresh) {
          error.config._retry = true;

          axios
            .get(`${BASE_URL}/api${authUrl?.refresh}`, null, {
              headers: {
                Authorization: refresh,
              },
            })
            .then((response) => {
              const newAccess = response.data;
              localStorage.setItem(accessToken, newAccess);

              error.config.headers["Authorization"] = newAccess;

              axios(error.config)
                .then((res) => {
                  resolve(response);
                })
                .catch((err) => {
                  reject(err);
                });
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          reject({ status: 401, message: "No Token Provided" });
        }
      }
    } catch (err) {
      reject({ status: 401, message: "Unauthorized", err });
    }
  });
};
