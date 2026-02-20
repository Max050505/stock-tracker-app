import {Inngest} from "inngest";

export const inngest = new Inngest({
    id: "stock-market-app",
    apiKey: process.env.INNGEST_EVENT_KEY,
    ai: {gemini: {apiKey: process.env.GEMINI_API_KEY!}}
})

