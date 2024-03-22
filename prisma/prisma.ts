import { PrismaClient } from "@prisma/client";
declare const global: typeof globalThis & { db?: PrismaClient };

let db: PrismaClient;

if (process.env.NODE_ENV === "production") {
  try {
    db = new PrismaClient();
  } catch (error) {
    console.error("Error initializing PrismaClient:", error);
  }
} else {
  if (!global.db) global.db = new PrismaClient();
  db = global.db;
}

export { db };
