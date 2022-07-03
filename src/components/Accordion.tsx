import * as React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
export interface AccordionProps {}

export default function Accordion(props: AccordionProps) {
  return (
    <div className="flex justify-between items-center">
      <p className="text-base">Tùy chỉnh đoạn chat </p>
      <MdKeyboardArrowDown />
    </div>
  );
}
