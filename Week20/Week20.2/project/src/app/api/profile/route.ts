import jwt from "jsonwebtoken"; 


import { NextRequest, NextResponse } from "next/server"; 


interface DecodedToken {
  userId: string;
  // Add other token fields here if needed
}

export function GET(req: NextRequest) {
  // Use .get() to retrieve the authorization header
  const authHeader = req.headers.get("authorization"); 

  if (!authHeader) {
    return NextResponse.json({ error: "Missing authorization header" }, { status: 401 });
  }

  // Extract the token if it uses the "Bearer <token>" format
  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

  try {
    // Use jwt.verify for security, or keep jwt.decode(token) if you only want to read data without validation
    const decoded = jwt.verify(token, "SECRET") as DecodedToken; 
    const userId = decoded?.userId;

    // Use the userId here to fetch the actual avatar URL from your database
    return NextResponse.json({ avatarUrl:"https://miro.medium.com/v2/resize:fit:1400/1*iGB13LuY2aQ9XHewsXI3IA@2x.jpeg" });
    
  } catch (error) {
    return NextResponse.json({ error: `Invalid token:${error}` }, { status: 401 });
  }
}
