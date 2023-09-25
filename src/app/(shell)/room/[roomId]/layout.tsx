import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { currentProfile } from "@/lib/current-profile";
// import RoomSidebar from "@/components/room/sidebar";

export default async function RoomLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { roomId: string };
}) {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/signin");
  }

  const room = await prisma.chatRoom.findUnique({
    where: {
      id: params.roomId,
    },
  });

  if (!room) {
    return redirect("/");
  }

  return (
    <div className="h-full">
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
}
