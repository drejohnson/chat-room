import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";
import { currentProfile } from "@/lib/current-profile";

import { JoinRoomModal } from "@/components/modal/join-room";

export default async function JoinRoomPage() {
  return <JoinRoomModal />;
}
