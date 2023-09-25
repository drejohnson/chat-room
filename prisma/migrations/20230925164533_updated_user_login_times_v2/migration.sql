/*
  Warnings:

  - Made the column `loggedOutAt` on table `userSessions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "userSessions" ALTER COLUMN "loggedOutAt" SET NOT NULL;
