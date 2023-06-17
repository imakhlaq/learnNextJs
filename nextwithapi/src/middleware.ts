import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  // you can use conditionals to do the same config
  if (req.url.includes("/api")) {
    console.log("middleware");
    //then code for that middleware
  }
  //same with regExp
  const regex = new RegExp("/api/*");
  if (regex.test(req.url)) {
    console.log("middleware");
    //then code for that middleware
  }

  console.log(req.url.includes("/api"));

  return NextResponse.next();
}

//middleware for routes
export const config = {
  matcher: "/api/:path*",
};
//"/api/:path*"  * it means for even deeply nested paths too
