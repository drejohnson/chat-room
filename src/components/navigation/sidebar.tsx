import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./item";
import { NavigationAction } from "./action";
import ModeToggle from "../mode-toggle";
import UserNav from "../user-nav";
import { currentProfile } from "@/lib/current-profile";

export default async function NavigationSidebar() {
  const profile = await currentProfile();

  if (!profile) {
    redirect("/signin");
  }

  const rooms = await prisma.chatRoom.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {rooms.map((room) => (
          <div key={room.id} className="mb-4">
            <NavigationItem id={room.id} name={room.name} />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />
        <UserNav />
      </div>
    </div>
  );
}
