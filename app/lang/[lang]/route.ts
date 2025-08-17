// app/lang/[lang]/route.ts
import { NextResponse } from "next/server";

export function GET(req: Request, ctx: { params: { lang: string } }) {
  const lang = ctx.params.lang === "en" ? "en" : "es"; // solo permitimos es/en

  const res = NextResponse.redirect(new URL("/", req.url));
  // Guardamos cookie 1 año
  res.cookies.set("lang", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return res;
}
