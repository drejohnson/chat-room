import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { UserStatus } from "@prisma/client";
import SignOut from "./sign-out";

export default async function AuthStatus() {
  const session = await getAuthSession();

  return (
    <div className="absolute bottom-5 w-full flex justify-center items-center">
      {session && (
        <>
          <p className="text-sm">Signed in as {session.user?.username}</p>
          <SignOut />
        </>
      )}
    </div>
  );
}
