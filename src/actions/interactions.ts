"use server";

import { db } from "../../prisma/prisma";

// TODO  : Create an interaction
export async function createInteraction(interaction: any) {
  try {
    const newInteraction = await db.interations.create({ data: interaction });
    return newInteraction;
  } catch (e) {
    console.error(e);
    return null;
  }
}
