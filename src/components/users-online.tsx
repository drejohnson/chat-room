import prisma from "@/lib/prisma";
import { UserAvatar } from "./user-avatar";

export default async function UsersOnline() {
  const usersByStatus = await prisma.user.findMany({
    where: {
      status: "ONLINE", // Replace with the status you want to filter by
    },
  });

  console.log(usersByStatus);
  return (
    <>
      <h3 className="text-xl font-bold text-green-400">users-online</h3>
      {usersByStatus.map((user) => {
        return (
          <div className="flex items-center gap-2 text-sm mt-4" key={user.id}>
            <UserAvatar className="bg-gray-700" />
            {user.username}
          </div>
        );
      })}
    </>
  );
}
