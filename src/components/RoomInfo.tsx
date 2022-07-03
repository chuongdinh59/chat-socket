import * as React from "react";
import { IoIosCall, IoIosVideocam } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
export interface RoomInfoProps {}

export default function RoomInfo(props: RoomInfoProps) {
  const btnData = [<IoIosCall />, <IoIosVideocam />, <BsInfoCircleFill />];
  return (
    <div className="h-[70px]  flex px-5 justify-between shadow-md 	">
      <div className="flex gap-3 items-center h-[70px] ">
        <div className="w-[45px] relative">
          <img
            src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
            alt="avatar"
            className="w-full rounded-full"
          />
          <span className="block absolute w-2 h-2 rounded-full bg-green-500 right-0 bottom-0"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-[18px] font-semibold">Darling</p>
          <p className="text-sm">Đang hoạt động</p>
        </div>
      </div>
      <div className="flex gap-[0_25px] justify-center items-center">
        {btnData.map((i) => {
          return (
            <div className=" cursor-pointer text-blue-500 text-[25px]">{i}</div>
          );
        })}
      </div>
    </div>
  );
}
