//query params
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  //way to remove extract query params
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");
  const instrument = searchParams.get("instrument");

  // to get all query params
  const obj = Object.fromEntries(searchParams);
  const obj1: string = "dada";

  //body
  const body = req.json();

  //sending response
  return NextResponse.json(obj);
}
