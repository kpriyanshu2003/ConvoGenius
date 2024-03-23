-- DropForeignKey
ALTER TABLE "Interations" DROP CONSTRAINT "Interations_collectionInteractionId_fkey";

-- AlterTable
ALTER TABLE "Interations" ALTER COLUMN "collectionInteractionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Interations" ADD CONSTRAINT "Interations_collectionInteractionId_fkey" FOREIGN KEY ("collectionInteractionId") REFERENCES "CollectionInteraction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
