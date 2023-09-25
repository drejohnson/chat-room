"use client";

import React, { FC, useState, useEffect } from "react";
import { pusherClient } from "@/lib/pusher";

interface MessagesProps {
  initialMessages: {
    text: string;
    id: string;
  }[];
  roomId: string;
}

const Messages: FC<MessagesProps> = ({ initialMessages, roomId }) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([]);

  useEffect(() => {
    // Function to handle incoming messages
    const handleIncomingMessage = (text: string) => {
      setIncomingMessages((prev) => [...prev, text]);
    };

    // Subscribe to the Pusher channel when the component mounts
    pusherClient.subscribe(roomId);

    // Bind the event handler to the "incoming-message" event
    pusherClient.bind("incoming-message", handleIncomingMessage);

    // Unsubscribe from the Pusher channel when the component unmounts
    return () => {
      pusherClient.unbind("incoming-message", handleIncomingMessage);
      pusherClient.unsubscribe(roomId);
    };
  }, [roomId]);

  return (
    <div>
      {initialMessages.map((message: { text: string; id: string }) => (
        <p key={message.id}>{message.text}</p>
      ))}
      {incomingMessages.map((text: string, i: number) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
};

export default Messages;
