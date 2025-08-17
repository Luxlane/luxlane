// app/layout.tsx
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import "./globals.css";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { getDict } from "@/i18n";
import LangSwitcher from "@/components/LangSwitcher";

export const metadata = {
  title: "LuxLine Transport",
  description: "Premium rides with live tracking.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const lang = (cookieStore.get("lang")?.value || "es") as "es" | "en";
  const t = getDict(lang);

  return (
    <html lang={lang}>
      <body>
        <header className="topbar">
          <div className="wrap topbar-inner">
            <div className="brand">
              <Link href="/" className="brandLink" aria-label="LuxLine Home">
                <Image
                  src="/logo/luxlane-dark.png.jpg"
                  alt="LuxLine Transport"
                  width={160}
                  height={28}
                  className="logo"
                  priority
                />
              </Link>
            </div>

            <nav className="nav">
              <Link href="/book">{t.nav.book}</Link>
              <Link href="/track/demo-trip">{t.nav.track}</Link>
              <Link href="/dashboard">{t.nav.dashboard}</Link>
              <LangSwitcher current={lang} />
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="wrap footer-inner">
            <small>© {new Date().getFullYear()} LuxLine Transport</small>
            <a className="footer-link" href="mailto:contacto@luxline.com">Contacto</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
