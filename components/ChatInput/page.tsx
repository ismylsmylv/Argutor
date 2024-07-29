import React from "react";

type Props = {};

function ChatInput({ message, setMessage, sendMessage }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage;
      }}
      className="input w-full flex justify-center items-center p-5 border-t-2 gap-4"
    >
      <input
        type="text"
        value={message}
        placeholder="Message"
        className="w-full outline-none"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="p-2 capitalize bg-cyan-400 rounded text-white"
      >
        send
      </button>
    </form>
  );
}

export default ChatInput;
