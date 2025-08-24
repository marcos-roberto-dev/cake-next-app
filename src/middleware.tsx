
import {  NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|images|public).*)"
  ],
};


export default function middleware(){
  // const url = req.nextUrl.clone();
  // const { pathname } = url;

  // const validLocales = ["pt-br", "en-us"];

  // if (pathname === "/") {
  //   url.pathname = "/pt-br";
  //   return NextResponse.redirect(url);
  // }

  // const pathLocale = pathname.split("/")[1];
  // if (!validLocales.includes(pathLocale)) {
  //   url.pathname = "/pt-br";
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}