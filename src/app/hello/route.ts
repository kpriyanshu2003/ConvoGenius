import { chatGPT } from "@/actions/chatgpt";

export async function GET() {
  return Response.json(await chatGPT("Hello, how is it going?"));
}
