import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {username,password}=req.body

    const userId=1;
    const token=jwt.sign({userId},"SECRET")
return NextResponse.json({
    msg:"Signin success",
    token
})
}