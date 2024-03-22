"use client";
import ChatArea from "@/components/ChatArea";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="relative flex items-start">
      <SideBar className="h-screen z-10 flex items-center relative" />
      <ChatArea />
    </div>
  );
}
