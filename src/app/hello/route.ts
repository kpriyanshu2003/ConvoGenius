import { newUser, signUpNewUser } from "@/actions/users/user";

export async function GET(request: Request) {
  // const data = await newUser();
  // const data = await signUpNewUser();
  const data = "hello";
  return new Response(JSON.stringify(data));
}
