import prisma from "@/lib/prisma";

export default async function UsersOnline() {
  const usersByStatus = await prisma.user.findMany({
    where: {
      status: "ONLINE", // Replace with the status you want to filter by
    },
  });

  console.log(usersByStatus);
  return (
    <>
      <div>users-online</div>
      {usersByStatus.map((user: { id: string; username: string }) => {
        return <div key={user.id}>{user.username}</div>;
      })}
    </>
  );
}
