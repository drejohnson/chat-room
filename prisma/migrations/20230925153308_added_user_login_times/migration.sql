/*
  Warnings:

  - You are about to drop the `user_login_times` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- DropTable
DROP TABLE "user_login_times";

-- CreateTable
CREATE TABLE "userSessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "loggedInAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "loggedOutAt" TIMESTAMP(3),

    CONSTRAINT "userSessions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userSessions" ADD CONSTRAINT "userSessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
