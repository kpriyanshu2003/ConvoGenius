import { db } from "../../../prisma/prisma";

export async function GET(request: Request) {
  // const res = await db.collectionInteraction.delete({
  //   where: { id: "clu3qbrh20005u1oy3wmub9ym" },
  //   include: { interaction: true },
  // });
  // const res = await db.collectionInteraction.deleteMany({
  //   where: { id: "clu3qbrh20005u1oy3wmub9ym" },
  // });
  const res = await db.interations.delete({
    where: { id: "clu3qbrf20003u1oyqro2tlrd" },
  });
  return new Response(JSON.stringify(res));
}
