/*
  Warnings:

  - You are about to drop the column `interactionId` on the `CollectionInteraction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollectionInteraction" DROP CONSTRAINT "CollectionInteraction_interactionId_fkey";

-- AlterTable
ALTER TABLE "CollectionInteraction" DROP COLUMN "interactionId";

-- AlterTable
ALTER TABLE "Interations" ADD COLUMN     "collectionInteractionId" TEXT;

-- AddForeignKey
ALTER TABLE "Interations" ADD CONSTRAINT "Interations_collectionInteractionId_fkey" FOREIGN KEY ("collectionInteractionId") REFERENCES "CollectionInteraction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
