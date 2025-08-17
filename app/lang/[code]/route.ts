// app/lang/[code]/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { code: "es" | "en" } }
) {
  const lang = params.code;

  const res = NextResponse.redirect(req.headers.get("referer") || "/");
  res.cookies.set("lang", lang, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 año
    sameSite: "strict",
  });

  return res;
}
