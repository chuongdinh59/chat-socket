import { BsFillEmojiSmileFill } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { MdAddPhotoAlternate } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
export interface ChatProps {}
export default function ChatBar(props: ChatProps) {
  return (
    <div className="flex items-center h-full p-2 gap-3">
      <div className="flex gap-3">
        <span className="block text-xl cursor-pointer ">
          <ImAttachment />
        </span>
        <span className="block  text-xl cursor-pointer">
          <MdAddPhotoAlternate />
        </span>
      </div>

      <div className="flex-1 bg-bg-search rounded-2xl overflow-hidden relative">
        <input
          type="text"
          placeholder="Aa"
          className="w-[95%] outline-none border-none rounded-2xl p-[6px] px-4 bg-transparent"
        />
        <div className="w-[30px] text-lg absolute right-0 bottom-1/2 translate-y-1/2">
          <BsFillEmojiSmileFill />
        </div>
      </div>
      <div className="w-[30px] text-2xl  text-blue-500">
        <AiFillLike />
      </div>
    </div>
  );
}
