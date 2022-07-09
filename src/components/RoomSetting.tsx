import * as React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { HiSearch } from "react-icons//hi";
import Accordion from "./Accordion";

export interface RoomSettingProps {}

export default function RoomSetting(props: RoomSettingProps) {
  const btnData = [<FaFacebook />, <BsFillBellFill />, <HiSearch />];
  return (
    <div className="border-l-2 border-bg-search p-6">
      <div className="w-20 relative mx-auto">
        <img
          src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
          alt="avatar"
          className="w-full rounded-full"
        />
        <span className="block absolute w-3 h-3 rounded-full bg-green-500 right-0 bottom-0"></span>
      </div>
      <div className="mx-auto text-center p-2">
        <p className="text-[20px] font-semibold">Darling</p>
        <p className="text-sm">Đang hoạt động</p>
      </div>

      <div className="text-sm flex justify-between p-4">
        {/* <div className="text-center flex items-center flex-col gap-2 ">
          <FaFacebook className="text-2xl p-3 bg-bg-search rounded-full cursor-pointer" />
          <p>Trang cá nhân</p>
        </div>
        <div className="text-center flex items-center flex-col gap-2">
          <BsFillBellFill className="text-2xl p-3 bg-bg-search rounded-full cursor-pointer" />
          <p>tắt thông báo</p>
        </div>
        <div className="text-center flex items-center flex-col gap-2 ">
          <HiSearch className="text-2xl p-3 bg-bg-search rounded-full cursor-pointer" />
          <p>Tìm kiếm</p>
        </div> */}
        {btnData.map((i, index) => {
          return (
            <div
              key={index}
              className="text-center flex items-center flex-col gap-2 "
            >
              <a
                href="/"
                className="block p-2 bg-bg-search rounded-full cursor-pointer text-2xl "
              >
                {i}
              </a>
              <p>Trang cá nhân</p>
            </div>
          );
        })}
      </div>
      <div className="py-4 font-semibold flex flex-col gap-4">
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
}
