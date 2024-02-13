import { Nullable } from "../types";

export enum EToken {
  access = "access",
  refresh = "refresh",
}

export const tokenManager = {
  getToken(name: EToken): Nullable<string> {
    const token = localStorage.getItem(`${name}Token`);
    return token || null;
  },

  setToken(name: EToken, token: string) {
    localStorage.setItem(`${name}Token`, token);
  },

  removeToken(name: EToken) {
    if (this.getToken(name)) {
      localStorage.removeItem(`${name}Token`);
    }
  },
};
