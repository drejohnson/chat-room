import MessageField from "@/components/message-field";
import Messages from "@/components/messages";
import UsersOnline from "@/components/users-online";
import prisma from "@/lib/prisma";
import type { Message } from "@prisma/client";

const RoomPage = async ({
  params,
}: {
  params: {
    roomId: string;
  };
}) => {
  const { roomId } = params;
  const existingMessages = await prisma.message.findMany({
    where: {
      chatRoomId: roomId,
    },
  });

  const serializedMessages = existingMessages.map((message: Message) => ({
    text: message.text,
    id: message.id,
  }));

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <header className="dark:bg-[#1E1F22] bg-[#E3E5E8] py-6 px-4">
        Messages:
      </header>
      <Messages roomId={roomId} initialMessages={serializedMessages} />
      <MessageField roomId={roomId} />
    </div>
  );
};

export default RoomPage;
