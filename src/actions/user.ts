"use server";

import { db } from "../../prisma/prisma";

export async function getUserId(uid: any) {
  try {
    const user = db.user.findUnique({
      where: { uid: uid },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
