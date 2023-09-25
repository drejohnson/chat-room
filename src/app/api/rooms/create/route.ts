import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { MemberRole } from "@prisma/client";
import prisma from "@/lib/prisma";

import { currentProfile } from "@/lib/current-profile";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const room = await prisma.chatRoom.create({
      data: {
        profileId: profile.id,
        name,
        members: {
          create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
        },
      },
    });

    return NextResponse.json(room);
  } catch (error) {
    console.log("[SERVERS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
