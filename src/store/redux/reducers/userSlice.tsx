import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, userNP } from "../../../interface";

export interface authState extends User {
  loading: Boolean;
  friends: Array<User>;
}

const initialState: authState = {
  name: undefined,
  id: "000",
  isAdmin: false,
  avatar: "000",
  loading: false,
  friends: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchLogin(state, action: PayloadAction<userNP | undefined>) {},
    fetchUser(state) {},
    fetchfriends(state) {},
    setfriends(state, action: PayloadAction<Array<User>>) {
      return {
        ...state,
        friends: action.payload,
      };
    },
    setUser(state, action: PayloadAction<User>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setLoading(state, action: PayloadAction<Boolean>) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchLogin,
  setUser,
  fetchUser,
  setLoading,
  fetchfriends,
  setfriends,
} = authSlice.actions;

export default authSlice.reducer;
