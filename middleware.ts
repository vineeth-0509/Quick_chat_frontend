// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   const publicRoutes = ["/", "/signin", "/signup"];
//   const { pathname } = request.nextUrl;
//   const token = await getToken({
//     req: request,
//     secret: process.env.NEXTAUTH_SECRET,
//   });
//   const isPublic = publicRoutes.some(
//     (route) => pathname === route || pathname.startsWith(`${route}/`)
//   );
//   if (!token && !isPublic) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   return NextResponse.next();
// }

// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard"] };
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});
export const config = {
  matcher: ["/dashboard"],
};
