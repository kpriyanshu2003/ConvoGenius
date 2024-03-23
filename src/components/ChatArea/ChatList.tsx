import React from "react";

// TODO : Add Types
function ChatList({ interaction }: { interaction: any }) {
  return (
    <div>
      {interaction.map((i: any) => (
        <div key={i.id} className="flex items-center justify-between p-4">
          <span>{i.id}</span>
          <span>{i.title}</span>
          <span>{i.content}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
