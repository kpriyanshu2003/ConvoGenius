import React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { BsArchive } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

// TODO : Add types for props
function HistoryListing({ id, name, email }) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="flex justify-between items-center my-2 cursor-pointer hover:bg-[#212121] py-1 px-2 rounded-md group">
      {name}
      <div className="relative gap-2 items-center group-hover:flex hidden transition-all duration-300">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="rounded-lg">
            <button className="outline-none">
              <HiDotsHorizontal />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-[#2f2f2f] text-white border border-[#444444]">
            <DropdownMenuLabel className="hover:bg-[#424242] py-4 flex items-center gap-3  rounded-lg">
              <IoShareOutline />
              <span>Share</span>
            </DropdownMenuLabel>
            <DropdownMenuLabel className="hover:bg-[#424242] py-4 flex items-center gap-3 rounded-lg">
              <FaPencilAlt />
              <span>Rename</span>
            </DropdownMenuLabel>
            <DropdownMenuLabel className="hover:bg-[#424242] py-4 flex items-center gap-3 text-red-400 rounded-lg">
              <RiDeleteBin5Line />
              <span>Delete Chat</span>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
        <BsArchive />
      </div>
    </div>
  );
}

export default HistoryListing;
