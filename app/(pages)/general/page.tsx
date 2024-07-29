"use client";
import ChatInput from "@/components/ChatInput/page";
import ChatTexts from "@/components/ChatTexts/page";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const General = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([] as any);
  const socketRef = useRef() as any;

  useEffect(() => {
    fetch("/api/socket"); // Initialize the API route

    // socketRef.current = io();
    socketRef.current = io({
      path: "/api/socketio", // Adjust path to match server
    });

    socketRef.current.on("connect", () => {
      console.log("connected to server");
    });

    socketRef.current.on("chat message", (msg: any) => {
      setMessages((prevMessages: any) => {
        const updatedMessages = [...prevMessages, msg];
        console.log(updatedMessages); // Log the updated messages
        return updatedMessages;
      });
    });

    // Cleanup on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socketRef.current) {
      socketRef.current.emit("chat message", message);
      setMessage("");
    } else {
      console.error("Socket is not initialized.");
    }
  };
  return (
    <div className="h-full flex justify-between align-center w-full flex-col	">
      {/* <ChatHeading params={"General" as any} /> */}

      <ChatTexts messages={messages} />

      <ChatInput
        setMessage={setMessage}
        message={message}
        sendMessage={sendMessage}
      />
      <div></div>
    </div>
  );
};

export default General;
