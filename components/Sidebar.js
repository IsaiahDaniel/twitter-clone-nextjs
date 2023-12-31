import React from "react";
import Image from "next/image";

// import { HomeIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/solid";

// import {
//   HashtagIcon,
//   BellIcon,
//   InboxIcon,
//   BookmarkIcon,
//   ClipboardListIcon,
//   UserIcon,
//   DotsCircleHorizontalIcon,
//   DotsHorizontalIcon,
// } from "@heroicons/react/24/solid";

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

import SidebarLink from "./SidebarLink";
import Avatar from "../assets/avatar.jpg";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[350px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image
          src={require("../assets/twitter-icon-svg.jpeg")}
          width={30}
          height={30}
          alt="avatar"
        />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-sm hover:bg-[#1a8cd8]">
        Tweet
      </button>

      <div className="flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-2.5 mt-auto" onClick={signOut}>
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />

        <div className="hidden xl:inline leading-5 text-white">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10 text-white" />
      </div>
    </div>
  );
}
