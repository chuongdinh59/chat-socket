import * as React from "react";
import ChatBar from "./ChatBar";
import RoomInfo from "./RoomInfo";
import RoomSetting from "./RoomSetting";

export interface RoomProps {}

export default function Room(props: RoomProps) {
  return (
    <div className="flex flex-col pb-3  ">
      <RoomInfo />
      <div className=" flex-1 flex flex-col">
        <div className="content flex-1"></div>
        <div className="h-[40px] mt-auto ">
          <ChatBar />
        </div>
      </div>
    </div>
  );
}
