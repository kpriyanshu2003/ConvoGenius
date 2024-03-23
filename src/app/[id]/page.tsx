import ChatArea from "@/components/ChatArea";
import React from "react";

function Page({ params }: { params: string }) {
  return (
    <>
      <ChatArea params={params} />
    </>
  );
}

export default Page;
