/*
  Warnings:

  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "password";

-- CreateTable
CREATE TABLE "Interations" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Interations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionInteraction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "interactionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionInteraction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CollectionInteraction" ADD CONSTRAINT "CollectionInteraction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionInteraction" ADD CONSTRAINT "CollectionInteraction_interactionId_fkey" FOREIGN KEY ("interactionId") REFERENCES "Interations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
