import React from "react";
import { BsArchive } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { deleteCollective } from "@/actions/collectiveInteractions";

// TODO : Add types for props
function HistoryListing({
  id,
  userId,
  createdAt,
  updatedAt,
}: {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}) {
  const router = useRouter();
  return (
    <div
      className="text-sm flex justify-between items-center my-2 cursor-pointer hover:bg-[#212121] py-2 px-2 rounded-md group"
      onClick={() => router.push(`/${id}`)}
    >
      {id.substring(0, 20)}
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
            <DropdownMenuLabel
              className="hover:bg-[#424242] py-4 flex items-center gap-3 text-red-400 rounded-lg"
              onClick={() => deleteCollective(id)}
            >
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
