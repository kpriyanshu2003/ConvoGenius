import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

function UserAccount() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full cursor-pointer rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>Name</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[#2f2f2f] text-white border border-[#444444]">
        <DropdownMenuLabel className="hover:bg-[#424242] py-4 rounded-lg">
          Customize
        </DropdownMenuLabel>
        <DropdownMenuLabel className="hover:bg-[#424242] py-4 rounded-lg">
          Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="hover:bg-[#424242] py-4 rounded-lg">
          Sign Out
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAccount;
