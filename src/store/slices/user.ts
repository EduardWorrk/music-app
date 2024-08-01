import { createSlice } from "@reduxjs/toolkit";
import { Nullable } from "@declarations/index";

type TUser = {
  id: null;
  userName: null;
  preferences: Nullable<string>;
  session: {
    sessionId: Nullable<string>;
    ipAddress: Nullable<string>;
    userAgent: Nullable<string>;
  };
};

type InitialState = {
  user: TUser;
};

const initialState: InitialState = {
  user: {
    id: null,
    userName: null,
    preferences: null,
    session: {
      sessionId: "",
      ipAddress: "",
      userAgent: "",
    },
  },
};

const user = createSlice({
  name: "album",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export const userSlice = user.reducer;
