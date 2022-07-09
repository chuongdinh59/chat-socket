import { User } from "../interface";
import ChatBar from "./ChatBar";
import RoomInfo from "./RoomInfo";

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
