// import OpenAI from "openai";
const OpenAI = require("openai").default;

const openai = new OpenAI({
  apiKey: "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", // Replace "YOUR_API_KEY_HERE" with your actual API key
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices);
}

main();
