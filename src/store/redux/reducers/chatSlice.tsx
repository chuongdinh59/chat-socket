import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Message, User, userNP } from "../../../interface";

export interface chatState {
  loading: Boolean;
  currentFriend: User | null;
  message: Array<Message>;
}

const initialState: chatState = {
  loading: false,
  currentFriend: null,
  message: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentFriend(state, action: PayloadAction<User | null>) {
      return {
        ...state,
        currentFriend: action.payload,
      };
    },
    addMessage(state, action: PayloadAction<Message>) {
      return {
        ...state,
        message: [...state.message, action.payload],
      };
    },
    createRoomChat(state, action: PayloadAction<User | null>) {},
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentFriend, addMessage, createRoomChat } =
  chatSlice.actions;

export default chatSlice.reducer;
