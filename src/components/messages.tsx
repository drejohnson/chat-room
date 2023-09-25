"use client";

import React, { FC, useState, useEffect, Fragment } from "react";
import { pusherClient } from "@/lib/pusher";
import { Separator } from "./ui/separator";

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
    <div className="flex-1 flex flex-col p-4 overflow-y-auto">
      {initialMessages.map((message) => (
        <Fragment key={message.id}>
          <p className="py-6 px-4">{message.text}</p>
          <Separator className="dark:bg-[#1E1F22] bg-[#E3E5E8]" />
        </Fragment>
      ))}
      {incomingMessages.map((text, i) => (
        <Fragment key={i}>
          <p className="py-6 px-4">{text}</p>
          <Separator className="dark:bg-[#1E1F22] bg-[#E3E5E8]" />
        </Fragment>
      ))}
    </div>
  );
};

export default Messages;
