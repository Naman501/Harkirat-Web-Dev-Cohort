import { PrismaClient } from "@/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString,
  }),
});
export async function POST(req: NextRequest) {
  const body = await req.json();
console.log(body)
  const user = await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);
  return NextResponse.json({
    mesg:"SIGNUP success!"
  });
}



// export async  function GET() {
//   return NextResponse.json({
//     name: "Naman",
//     email: "n@m.com",
//   });
// }


export  async function GET() {
  const user=await prisma.user.findFirst()
console.log("GET USERS",user)
  return NextResponse.json({
    user,
    message:"User Details"
  })
}