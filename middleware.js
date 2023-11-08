// NextResponse be ma in ejaze ro mide k redirect konim request haro be yek url dg
import { NextResponse } from "next/server";

//export function middleware(request) {
  // return NextResponse.redirect(new URL("/under-construction", request.url));
  // return NextResponse.rewrite(new URL("/under-construction", request.url));

  // -------------------- Conditional Statement -----------------
//   if (request.nextUrl.pathname.startsWith("/about")) {
//     return NextResponse.rewrite(new URL("/under-construction", request.url));
//   }
//   if (request.nextUrl.pathname.startsWith("/quiz")) {
//     return NextResponse.rewrite(new URL("/under-construction", request.url));
//   }
// }

export const config = {
  // -------------------- Custom Matcher Config -----------------
  // matcher :'/about'
  ////////////////////////////////////////
  //   matcher: ["/about", "/quiz"],
  ////////////////////////////////////////
  // in line agr comment she css az proje hazf mishe v safe bdon css mishe
  //   matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ////////////////////////////////////////
  // matcher: ["/about/:path*", "/about/:path?", "/about/:path+", "/about/:path"],
};

// ---------------------- Using cookies && Setting Headers --------------- 
export function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]
 
  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false
 
  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.
 
  return response
}