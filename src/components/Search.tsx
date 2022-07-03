import * as React from "react";
import { HiSearch } from "react-icons/hi";
export interface SearchProps {}

export default function Search(props: SearchProps) {
  return (
    <div className=" relative rounded-xl my-6 bg-bg-search overflow-hidden ">
      <input
        type="text"
        className="w-[90%] bg-transparent p-3 pl-6 outline-none border-none"
        placeholder="Tìm kiếm trến message"
      />
      <div className="absolute right-[5%] bottom-[50%] translate-y-[50%] text-gray-400 text-2xl cursor-pointer">
        <HiSearch />
      </div>
    </div>
  );
}
