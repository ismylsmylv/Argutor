import ChatHeading from "@/components/ChatHeading/page";
import React from "react";

type Props = {
  params: {
    userid: string;
  };
};

function Chat({ params }: Props) {
  // Chat {params.userid}
  return (
    <div className="h-full flex justify-between align-center w-full">
      <ChatHeading params={params} />
      <div className="texts"></div>
      <div className="input"></div>
    </div>
  );
}

export default Chat;
