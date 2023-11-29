import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";

// 1 completed
const locales = ["en-us", "en", "fa-ir", "fa"];
function getLocale(request) {
  // 2 completed
  const defaultLocale = "fa-ir";

  //  be in shekel miam header ha ro migiram v daron yek object zakhire mikonam
  const negotiatorHeaders = {};

  // request.headers.forEach((value, key) => { //  اینجا زبان رو از مرورگر میخونه
  //   negotiatorHeaders[key] = value;
  // });

  // let cookie = request.cookies.get("locale");

  // let gotiatorHeaders = { "accept-language": `${cookie};q=0.5` };
  // console.log(`ge : ${gotiatorHeaders}`);

  let negotiatorHeaders2 = { "accept-language": "fa-ir,fa;q=0.5" }; // اینجا خودم دستی اومدم دادم که دیفالت زبان این باشه

  // 3 completed
  let languages = new Negotiator({ headers: negotiatorHeaders2 }).languages();
  const locale = match(languages, locales, defaultLocale);

  //   console.log(locale);
  return locale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  // 1_ check mikonim user khudesh zaban ro vared karde ye na
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;
  //3_ check mikonam cookie ro va tebgh on amal mikonam
  if (request.cookies.has("locale")) {
    let cookie = request.cookies.get("locale");
    return NextResponse.redirect(
      new URL(
        `${cookie.value}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
  //2_ agr hala vared nakarde bod v niyaz has dynamic khudmon handle konim
  const locale = getLocale(request);
  return NextResponse.redirect(
    new URL(
      `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url
    )
  );
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
