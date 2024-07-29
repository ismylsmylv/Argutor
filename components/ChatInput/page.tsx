import React from "react";

type Props = {};

function ChatInput({}: Props) {
  return (
    <div className="input w-full flex justify-center items-center p-5 border-t-2 gap-4">
      <input
        type="text"
        placeholder="Message"
        className="w-full outline-none"
      />
      <button className="p-2 capitalize bg-cyan-400 rounded text-white">
        send
      </button>
    </div>
  );
}

export default ChatInput;
