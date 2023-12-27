import axios from "axios"
import { BASE_URL } from "../const/site"
import { accessToken } from "../const/localStorage";

export const api = axios.create({
    baseURL: `${BASE_URL}/api`,
});

api.interceptors.request.use(
    async (config) => {
        config.headers["Authorization"] = localStorage.getItem(accessToken);
        return config;
    },
    async (err) => {
        return Promise.reject(err)
    }
)