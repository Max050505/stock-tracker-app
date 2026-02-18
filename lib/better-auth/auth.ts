import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectToDatabase } from "@/database/mongoose";
import { nextCookies } from "better-auth/next-js";

let authInstance: ReturnType<typeof betterAuth> | null = null;

export const getAuth = async () => {
  if (authInstance) return authInstance;
  const db = await connectToDatabase();
  const mongodb = db.connection.db;
  if (!db) throw new Error("Failed to connect to database");    
    authInstance = betterAuth({
        database: mongodbAdapter(mongodb as any),
        secret: process.env.BETTER_AUTH_SECRET,
        baseURL: process.env.BETTER_AUTH_URL,
        plugins: [nextCookies()],
        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        }
    })
    return authInstance;
}

export const getAuthInstance = async () => {
  return await getAuth();
};