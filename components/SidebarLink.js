import React from "react";

export default function SidebarLink({ text, Icon, active }) {
  return (
    <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && 'font-bold'}`}>
      <Icon className="h-7 text-white" />
      <span className="hidden xl:block text-white">{text}</span>
    </div>
  );
}
