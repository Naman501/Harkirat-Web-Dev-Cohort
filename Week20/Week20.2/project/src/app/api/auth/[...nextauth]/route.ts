import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";


const handler=NextAuth(NEXT_AUTH)

console.log("ENV",process.env.NEXTAUTH_SECRET)

export const GET=handler
export const POST=handler