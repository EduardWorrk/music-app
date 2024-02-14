import { TLogin } from "@declarations/auth";
import { axiosAuthInstance } from "./instances";

export const authApi = {
  async authenticateUser({ userName, password }: TLogin) {
    const response = await axiosAuthInstance.post<{ token: string }>("login", {
      userName,
      password,
    });

    return response.data;
  },

  async registrationUser({ userName, password }: TLogin) {
    const response = await axiosAuthInstance.post<{ token: string }>(
      "register",
      {
        userName,
        password,
      }
    );

    return response.data;
  },
};
