"use client";

import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { 
  Avatar,
  AvatarImage,
  AvatarFallback 
} from "@/components/ui/avatar";

import { LogoutButton } from "@/components/auth/logout-button";
import { clientCurrentUser } from "@/hooks/auth";
import { UserLogged } from "@/schemas";
import { EllipsisVertical, Waypoints } from "lucide-react";

export const UserButton = ({user}: {user: UserLogged}) => {
  // const user: UserLogged = clientCurrentUser()
  const image = ""
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex items-center justify-between select-none ml-1">
        <div className="flex items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src={user?.image} />
            <AvatarFallback className="bg-sky-500">
              <FaUser className="text-white" />
            </AvatarFallback>
          </Avatar>
          <p className="ml-2 font-semibold text-white hover:text-sky-500 truncate">{user?.name}</p>
        </div>
        <EllipsisVertical className="text-white hover:text-sky-500 w-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent  align="end" className="w-48 py-2">
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <FiLogOut className="h-4 w-4 mr-2"/>
            <p className="hover:text-sky-500">Logout</p>
            </DropdownMenuItem>
        </LogoutButton>
        <DropdownMenuItem className="cursor-pointer">
          <Waypoints className="h-4 w-4 mr-2"/>
          <p className="hover:text-sky-500">Option 2</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Waypoints className="h-4 w-4 mr-2"/>
          <p className="hover:text-sky-500">Option 2</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
