import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../store";
import { setCurrentFriend } from "../store/redux/reducers/chatSlice";
import socket from "../config/socket";

export interface SearchProps {}

export default function Search(props: SearchProps) {
  const user = useSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className=" relative rounded-xl my-6 bg-bg-search ">
      <input
        type="text"
        className="w-[90%] bg-transparent p-3 pl-6 outline-none border-none"
        placeholder="Tìm kiếm trến message"
        onClick={() => {
          if (isOpen) {
            dispatch(setCurrentFriend(null));
          }
          setIsOpen(!isOpen);
        }}
      />
      <div className="absolute w-full top-full left-0 right-0 z-20 max-h-[300px] overflow-auto">
        {isOpen
          ? user.friends
              .filter((i) => i.id !== user.id)
              ?.map((i) => (
                <div
                  className="bg-bg-main text-green-500  z-10 flex gap-5 py-2 items-center  "
                  onClick={() => {
                    dispatch(setCurrentFriend(i));
                    socket.emit("create-room", i);
                  }}
                  key={i.id?.toString()}
                >
                  <img
                    src={i.avatar?.toString()}
                    alt=""
                    className="w-14 rounded-full"
                  />
                  <span>{i.name}</span>
                </div>
              ))
          : ""}
      </div>
      <div className="absolute right-[5%] bottom-[50%] translate-y-[50%] text-gray-400 text-2xl cursor-pointer">
        <HiSearch />
      </div>
    </div>
  );
}
