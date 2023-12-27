import { api } from "./api";
import { tokenRefresh } from "./apis/auth-methods";

const apiCall = async (method, url, data) => {
  return new Promise((resolve, reject) => {
    try {
      let response;

      switch (method) {
        case "get":
          response = api.get(url, data);
          break;

        case "post":
          response = api.post(url, data);
          break;

        case "put":
          response = api.put(url, data);
          break;

        case "delete":
          response = api.delete(url, data);
          break;

        case "patch":
          response = api.patch(url, data);
          break;

        default:
          response = null;
          break;
      }

      if (response) {
        resolve(response.data);
      }
    } catch (error) {
      if (error.response.status === 401) {
        tokenRefresh(error)
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            localStorage.clear();
            window.location.reload("/login");
          });
      } else {
        reject(error);
      }
    }
  });
};

export default apiCall;
