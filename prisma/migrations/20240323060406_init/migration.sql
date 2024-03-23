/*
  Warnings:

  - Made the column `collectionInteractionId` on table `Interations` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Interations" DROP CONSTRAINT "Interations_collectionInteractionId_fkey";

-- AlterTable
ALTER TABLE "Interations" ALTER COLUMN "collectionInteractionId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Interations" ADD CONSTRAINT "Interations_collectionInteractionId_fkey" FOREIGN KEY ("collectionInteractionId") REFERENCES "CollectionInteraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
