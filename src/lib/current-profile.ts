import prisma from "@/lib/prisma";
import { getAuthSession } from "./auth";

export const currentProfile = async () => {
  const session = await getAuthSession();

  const username = session?.user.username as string;

  const user = await prisma.user.findUnique({
    where: {
      username: username as string,
    },
  });

  const userId = user?.id;

  if (!userId) {
    return null;
  }

  const profile = await prisma.profile.findUnique({
    where: {
      userId,
    },
    include: {
      user: true,
    },
  });

  return profile;
};
