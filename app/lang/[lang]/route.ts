// app/lang/[lang]/route.ts
import { NextResponse } from "next/server";

export function GET(req: Request, ctx: { params: { lang: string } }) {
  const lang = ctx.params.lang === "en" ? "en" : "es"; // solo es/en

  // Redirige a donde estabas (referer) o al home si no hay
  const referer = (req.headers.get("referer") || "/") as string;
  const url = new URL(referer, new URL(req.url).origin);

  const res = NextResponse.redirect(url.toString());
  res.cookies.set("lang", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 año
    sameSite: "lax",
  });
  return res;
}
