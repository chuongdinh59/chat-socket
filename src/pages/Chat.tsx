import Room from "../components/Room";
import RoomSetting from "../components/RoomSetting";
import SideBar from "../components/SideBar";

export interface ChatProps {}

export default function Chat(props: ChatProps) {
  return (
    <div className="grid grid-cols-[1fr_3fr]   w-screen h-screen  bg-bg-main text-text-primary">
      <SideBar />
      <div className="grid grid-cols-[6fr_3fr]">
        <Room />
        <RoomSetting />
      </div>
    </div>
  );
}
