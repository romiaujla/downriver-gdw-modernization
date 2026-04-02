import Link from "next/link";

import { siteNavigationItems } from "./site-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-brand" href="/">
          <span className="site-brand-mark">DG</span>
          <span className="site-brand-copy">
            <span className="site-brand-title">Downriver Gurudwara</span>
            <span className="site-brand-subtitle">Modernization MVP</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="site-nav-desktop">
          {siteNavigationItems.map((item) => (
            <Link
              key={item.href}
              className={[
                "site-nav-link",
                item.emphasize ? "site-nav-link-emphasis" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="site-nav-mobile">
          <summary className="site-nav-toggle">Menu</summary>
          <nav aria-label="Mobile primary" className="site-nav-mobile-panel">
            {siteNavigationItems.map((item) => (
              <Link
                key={item.href}
                className={[
                  "site-nav-link",
                  "site-nav-link-mobile",
                  item.emphasize ? "site-nav-link-emphasis" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
