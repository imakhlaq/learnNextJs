import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000", "http://0.0.0.0:3000"];

export async function middleware(req: Request) {
  //cors work around it's not needed because your front end is combined with backend, and they are hosted o same origin but when and other site
  // need to access the server then these cors needed to be set

  //getting headers
  const origin = req.headers.get("origin");

  //add one more to block tools  ||!origin
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

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
