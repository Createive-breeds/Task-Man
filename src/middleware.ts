import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { cookies } from "next/headers";
import { PAGES } from "./lib/constants";

//  Specify protected and public routes
const protectedRoutes = [PAGES.DASHBOARD];
const publicRoutes = [PAGES.SIGN_IN, PAGES.SIGN_UP, "/"];

export default async function middleware(req: NextRequest) {
  //  Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const _cookies = await cookies();
  // 3. Decrypt the session from the cookie
  const cookie = _cookies.get("session")?.value;
  const session = await decrypt(cookie);

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(
      new URL(PAGES.SIGN_IN + "?status=unauthorized", req.nextUrl)
    );
  }

  // TODO: add checks for admin pages
  //  Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith(PAGES.DASHBOARD)
  ) {
    return NextResponse.redirect(new URL(PAGES.DASHBOARD, req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
