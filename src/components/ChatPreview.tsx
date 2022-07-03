import * as React from "react";

export interface ChatPreviewProps {}

export default function ChatPreview(props: ChatPreviewProps) {
  return (
    <div className="flex gap-3 p-[10px] items-center bg-active-message rounded-lg">
      <div className="w-14 h-14">
        <img
          src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
          alt="avatar"
          className=" w-full h-full rounded-full object-center object-cover"
        />
      </div>
      <div className="flex flex-col ">
        <span className="font-semibold text-[16px] py-1">Darling</span>
        <span className="text-[14px] text-text-primary opacity-80">
          Bạn: Al2O3 + H20
        </span>
      </div>
    </div>
  );
}
