import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import Room from "../components/Room";
import RoomSetting from "../components/RoomSetting";
import SideBar from "../components/SideBar";
import socket from "../config/socket";

import { RootState } from "../store";
import { chatState } from "../store/redux/reducers/chatSlice";
import { authState } from "../store/redux/reducers/userSlice";

export interface ChatProps {}
export default function Chat(props: ChatProps) {
  const chat: chatState = useSelector((state: RootState) => state.chat);
  const user: authState = useSelector((state: RootState) => state.user);
  const memoizedValue = useMemo(() => user, [user.id]);
  useEffect(() => {
    if (user.id !== "000") {
      console.log(user);
      socket.emit("init-user", memoizedValue.id);
    }
  }, [user.id]);
  return (
    <div className="grid grid-cols-[1fr_3fr] w-screen h-screen  bg-bg-main text-text-primary overflow-hidden">
      <SideBar />
      {chat.currentFriend ? (
        <div className="grid grid-cols-[6fr_3fr]">
          <Room />
          <RoomSetting />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-xl font-semibold opacity-6">
            Hãy chọn một đoạn chat hoặc bắt đầu cuộc trò chuyện mới
          </h1>
        </div>
      )}
    </div>
  );
}
