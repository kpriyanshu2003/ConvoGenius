"use server";

import { db } from "../../prisma/prisma";
import { supabase } from "../../prisma/supbase";

export async function signUpUsingEmailPassword(
  email: string,
  password: string,
  username: string
) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  if (data) {
    if (data.user?.email)
      await db.user.create({
        data: {
          email: data.user?.email,
          uid: data.user.id,
          name: username,
        },
      });
  }
}

export async function signInUsingEmailPassword(
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  const user = await db.user.findUnique({ where: { email } });
  if (error) throw error;
  if (user && data) return data;
  return null;
}
