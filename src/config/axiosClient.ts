import { store } from "./../store/index";
import { authService } from "./../service/userService";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import queryString from "query-string";
import { errorExpireToken } from "../interface";
import { fetchUser } from "../store/redux/reducers/userSlice";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  if (config.url !== "api/auth/login") {
    const token = localStorage.getItem("token") || "";
    const { accessToken } = JSON.parse(token);
    config.headers = {
      ...config.headers,
      token: `Bearer ${accessToken}`,
    };
  }
  return config;
});

axiosClient.interceptors.response.use(
  async (response: AxiosRequestConfig) => {
    if (response && response?.data) {
      return response.data;
    }
    return response;
  },
  async (error: AxiosError) => {
    // Handle errors
    // const { data }: any = error.response;
    // console.log(data.name);
    // switch (data.name) {
    //   case "TokenExpiredError":
    //     // Refersh lai token
    //     await authService.refreshToken();
    //     store.dispatch(fetchUser());
    //     break;
    //   default:
    //     break;
    // }
    throw error;
  }
);
export default axiosClient;
