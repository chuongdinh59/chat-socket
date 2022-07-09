import { User, userNP } from "./../interface/index";
import axiosClient from "../config/axiosClient";

interface result {
  token?: Object;
  errors: String;
  message: String;
}
export const authService = {
  async login(data: userNP) {
    try {
      const result: result = await axiosClient.post("api/auth/login", data);
      // Save token
      if (result.errors) {
        console.log(result.errors);
      } else {
        localStorage.setItem("token", JSON.stringify(result?.token));
        console.log("SETTOKEN");
      }
    } catch (error) {
      throw error;
    }
  },
  async getUser(): Promise<User> {
    try {
      return axiosClient.get("api/user");
    } catch (error) {
      throw error;
    }
  },
  async refreshToken() {
    const { refreshToken } = JSON.parse(localStorage.getItem("token") || "");
    const newAccesToken: any = await axiosClient.post(
      "/api/auth/refresh-token",
      {},
      {
        headers: {
          refreshToken,
        },
      }
    );
    const newToken = {
      refreshToken,
      accessToken: newAccesToken.token.accessToken,
    };
    localStorage.setItem("token", JSON.stringify(newToken));
  },
  async getAllfriends() {
    try {
      return axiosClient.get("/api/user/friends");
    } catch (error) {
      throw error;
    }
  },
};
