import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { currentProfile } from "@/lib/current-profile";
import UsersOnline from "@/components/users-online";
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
      <div className="hidden md:flex h-full bg-gray-950 py-4 w-60 z-20 flex-col items-center fixed inset-y-0">
        <UsersOnline />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
}
