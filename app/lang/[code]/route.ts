import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { code: string } }
) {
  const code = params.code === "en" ? "en" : "es";
  const referer = req.headers.get("referer") ?? "/";
  const url = new URL(referer, req.url);

  const res = NextResponse.redirect(url.toString());
  res.cookies.set("lang", code, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // 1 año
  });
  return res;
}
