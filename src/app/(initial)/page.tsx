import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { currentProfile } from "@/lib/current-profile";

import { InitialModal } from "@/components/modal/initial-create-room";

export default async function SetupPage() {
  const profile = await currentProfile();

  const room = await prisma.chatRoom.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  if (room) {
    return redirect(`/room/${room.id}`);
  }

  return <InitialModal />;
}
