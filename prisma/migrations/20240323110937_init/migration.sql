-- DropForeignKey
ALTER TABLE "Interations" DROP CONSTRAINT "Interations_collectionInteractionId_fkey";

-- AddForeignKey
ALTER TABLE "Interations" ADD CONSTRAINT "Interations_collectionInteractionId_fkey" FOREIGN KEY ("collectionInteractionId") REFERENCES "CollectionInteraction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
