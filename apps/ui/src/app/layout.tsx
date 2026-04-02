import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "../components/features/site-footer";
import { SiteHeader } from "../components/features/site-header";
import { siteConfig } from "../content/site-config";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.settings.shellName,
  description: siteConfig.settings.description,
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
