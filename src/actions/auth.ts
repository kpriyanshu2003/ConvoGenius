"use server";

import { db } from "../../prisma/prisma";
import { supabase } from "../../prisma/supbase";

export async function signUpUsingEmailPassword(
  email: string,
  password: string,
  username: string
) {
  let user;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  if (data && data.user?.email)
    user = await db.user.create({
      data: {
        email: data.user?.email,
        uid: data.user.id,
        name: username,
      },
    });
  return user;
}

export async function signInUsingEmailPassword(
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  if (data) {
    supabase.auth.setSession({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
  }
  const user = await db.user.findUnique({ where: { email } });
  if (user && data) return data;
  return null;
}
