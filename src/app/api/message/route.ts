import { currentProfile } from "@/lib/current-profile";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";

export async function POST(req: Request) {
  const profile = await currentProfile();
  const { text, roomId } = await req.json();

  if (!profile) {
  }

  if (!roomId) {
  }

  if (!text) {
  }

  const room = await prisma.chatRoom.findFirst({
    where: {
      id: roomId as string,
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
    include: {
      members: true,
    },
  });

  if (!room) {
  }

  const member = room?.members.find(
    (member) => member.profileId === profile?.id
  );

  if (!member) {
  }

  pusherServer.trigger(roomId, "incoming-message", text);

  await prisma.message.create({
    data: {
      text,
      chatRoomId: roomId,
      memberId: member?.id!,
    },
    include: {
      member: {
        include: {
          profile: true,
        },
      },
    },
  });

  return new Response(JSON.stringify({ success: true }));
}
