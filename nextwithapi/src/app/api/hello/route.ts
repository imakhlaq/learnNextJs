import { NextResponse } from "next/server";
export async function GET(request: Request, res: Response) {
  const data = "papa";

  return NextResponse.json({ data });
}
