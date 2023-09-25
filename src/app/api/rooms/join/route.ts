import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
// import { MemberRole } from "@prisma/client";
import prisma from "@/lib/prisma";

import { currentProfile } from "@/lib/current-profile";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    const profile = await currentProfile();

    const room = await prisma.chatRoom.findUnique({
      where: { id },
    });

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!room) {
      return new NextResponse("Room not found", { status: 401 });
    }

    const member = await prisma.member.create({
      data: {
        role: "GUEST",
        profileId: profile.id,
        roomId: id,
      },
    });

    return NextResponse.json(member);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
