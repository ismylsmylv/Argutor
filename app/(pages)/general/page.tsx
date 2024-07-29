"use client";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const General = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();
  // skfdfdj
  useEffect(() => {
    socketRef.current = io();

    socketRef.current.on("connect", () => {
      console.log("connected to server");
    });

    socketRef.current.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      console.log(messages);
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
    <div>
      <h1>Chat</h1>
      {JSON.stringify(messages)}
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default General;
