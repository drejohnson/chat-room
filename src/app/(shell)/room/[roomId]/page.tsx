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
    <div className="h-screen">
      <p>messages:</p>
      <Messages roomId={roomId} initialMessages={serializedMessages} />
      <MessageField roomId={roomId} />
      <UsersOnline />
    </div>
  );
};

export default RoomPage;
