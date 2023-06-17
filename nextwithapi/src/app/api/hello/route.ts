import { NextResponse } from "next/server";
import { limiter } from "@/app/api/config/limiter";
export async function GET(request: Request, res: Response) {
  //removing tokens for each request
  const remaining = await limiter.removeTokens(1);

  const origin = request.headers.get("origin");

  if (remaining) {
    //when user uses all his tokens
    return new NextResponse("Too many Req", {
      status: 429,
      statusText: "Too many request",
      headers: {
        "Access-Control-Allow-Origin": origin ?? "*",
        "Content-Type": "Text/plain",
      },
    });
  }

  return NextResponse.json({ message: "hello visitor" });
}
