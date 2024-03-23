"use server";

import { db } from "../../prisma/prisma";

// dive deep into the single collective
export async function getCollective(collectiveId: any) {
  try {
    const collective = await db.collectionInteraction.findMany({
      where: { id: collectiveId },
      include: { interaction: true },
    });
    return collective;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// GET all collection of a user
export async function getAllCollective(userid: string) {
  try {
    const collective = await db.collectionInteraction.findMany({
      where: { userId: userid },
    });
    return collective;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// create a collective interaction whenever a user interacts with the bot ( in new chat )
export async function createCollective(userId: any, interactionId: any) {
  try {
    const newCollective = await db.collectionInteraction.create({
      data: { userId, interaction: { connect: { id: interactionId } } },
    });
    return newCollective;
  } catch (e) {
    console.error(e);
    return null;
  }
}

// add new interaction to the collective interaction
export async function addInteractionToCollective(
  collectiveId: any,
  interactionId: any
) {
  try {
    const newCollective = await db.collectionInteraction.update({
      where: { id: collectiveId },
      data: { interaction: { connect: { id: interactionId } } },
    });
    return newCollective;
  } catch (e) {
    console.error(e);
    return null;
  }
}

// TODO : delete all interactions when the user deletes on collective interaction
export async function deleteCollective(collectiveId: any) {
  try {
    // Fetch the collectionInteraction to get associated interactions
    const collectionInteraction = await db.collectionInteraction.findUnique({
      where: { id: collectiveId },
      include: { interaction: true },
    });

    // Delete the collectionInteraction
    const deletedCollective = await db.collectionInteraction.delete({
      where: { id: collectiveId },
      include: { interaction: true },
    });

    // Delete associated interactions
    const deletedInteractions = await Promise.all(
      collectionInteraction?.interaction.map(async (interaction) => {
        return await db.interations.delete({ where: { id: interaction.id } });
      }) || []
    );

    return { deletedCollective, deletedInteractions };
  } catch (e) {
    console.error(e);
    return null;
  }
}
