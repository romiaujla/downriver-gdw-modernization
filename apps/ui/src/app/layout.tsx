import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "../components/features/site-footer";
import { SiteHeader } from "../components/features/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: "React Application Bootstrap",
  description: "Monorepo bootstrap UI scaffold",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <SiteHeader />
          <div className="site-shell-content">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
