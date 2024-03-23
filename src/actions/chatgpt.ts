"use server";
import axios from "axios";

const options = {
  method: "POST",
  url: `https://${process.env.NEXT_PUBLIC_RAPID_API_HOST}/v1/chat/completions`,
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
  data: {
    messages: [{ role: "user", content: "Hello, how is it going?" }],
    model: "gpt-4-turbo-preview",
    max_tokens: 200,
    temperature: 0.9,
  },
};

export async function chatGPT(message: string) {
  try {
    if (!message) return null;
    options.data.messages[0].content = message;
    const res = await axios.request(options);
    // console.log(res.data);
    return res.data.choices[0].message.content;
  } catch (error) {
    console.error("Error in chatGPT: ", error);
    return null;
  }
}
