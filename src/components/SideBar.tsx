import * as React from "react";
import { HiOutlineDotsHorizontal, HiVideoCamera } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import Search from "./Search";
import ChatPreview from "./ChatPreview";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { User } from "../interface";
import { authState } from "../store/redux/reducers/userSlice";
export interface SideBarProps {}

export default function SideBar(props: SideBarProps) {
  const btnData = [<HiOutlineDotsHorizontal />, <HiVideoCamera />, <CgNotes />];
  const user: authState = useSelector((state: RootState) => state.user);
  return (
    <div className=" p-3 border-r-[1px] border-bg-search">
      {<img src={user.avatar?.toString()} alt="" />}
      <div className="flex flex-col">
        <div className="flex justify-between items-center ">
          <span className="text-cyan-400 text-2xl font-semibold">Chat</span>
          <div className="flex gap-[0_10px]  justify-center items-center">
            {btnData.map((i, index) => {
              return (
                <a
                  key={index}
                  href="/"
                  className="block p-3 bg-bg-search rounded-full cursor-pointer"
                >
                  {i}
                </a>
              );
            })}
          </div>
        </div>
        <Search />
        <div className="flex-1 flex  flex-col">
          <ChatPreview />
        </div>
      </div>
    </div>
  );
}
