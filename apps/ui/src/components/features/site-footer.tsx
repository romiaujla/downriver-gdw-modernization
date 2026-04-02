import Link from "next/link";

import { siteNavigationItems } from "./site-navigation";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-title">Downriver Gurudwara</p>
          <p className="site-footer-copy">
            A shared MVP shell for consistent wayfinding, contact access, and
            future page assembly.
          </p>
        </div>

        <nav aria-label="Footer" className="site-footer-nav">
          {siteNavigationItems.map((item) => (
            <Link key={item.href} className="site-footer-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
