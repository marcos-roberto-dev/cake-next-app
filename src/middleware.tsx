import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};


export default function middleware(req: NextRequest){
   const url = req.nextUrl.clone();
  const { pathname } = url;

  const validLocales = ["pt-BR", "en-US"];

  if (pathname === "/") {
    url.pathname = "/pt-BR";
    return NextResponse.redirect(url);
  }

  const pathLocale = pathname.split("/")[1];
  if (!validLocales.includes(pathLocale)) {
    url.pathname = "/pt-BR";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}