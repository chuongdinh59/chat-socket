import * as React from "react";
import { IoIosCall, IoIosVideocam } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { chatState } from "../store/redux/reducers/chatSlice";
import { RootState } from "../store";
import { useSelector } from "react-redux";
export interface RoomInfoProps {}

export default function RoomInfo(props: RoomInfoProps) {
  const btnData = [<IoIosCall />, <IoIosVideocam />, <BsInfoCircleFill />];
  const chat: chatState = useSelector((state: RootState) => state.chat);
  return (
    <div className="h-[70px]  flex px-5 justify-between shadow-md 	">
      <div className="flex gap-3 items-center h-[70px] ">
        <div className="w-[45px] relative">
          <img
            src={chat.currentFriend?.avatar?.toString()}
            alt="avatar"
            className="w-full rounded-full"
          />
          <span className="block absolute w-2 h-2 rounded-full bg-green-500 right-0 bottom-0"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-[18px] font-semibold">
            {chat.currentFriend?.name}
          </p>
          <p className="text-sm">Đang hoạt động</p>
        </div>
      </div>
      <div className="flex gap-[0_25px] justify-center items-center">
        {btnData.map((i, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer text-blue-500 text-[25px]"
            >
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}
