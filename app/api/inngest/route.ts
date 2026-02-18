import {serve} from "inngest/next";
import {inngest} from "@/lib/inngest/client";
import { sendSignUpEmail, sendDailyNewsSummary } from "@/lib/inngest/functions";

export const {POST, GET, PUT} = serve({
    client: inngest,
    functions: [sendSignUpEmail, sendDailyNewsSummary]
})