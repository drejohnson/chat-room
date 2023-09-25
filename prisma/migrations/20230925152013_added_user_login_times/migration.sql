-- CreateTable
CREATE TABLE "user_login_times" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "loggedInAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_login_times_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_login_times_userId_key" ON "user_login_times"("userId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "user_login_times"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
