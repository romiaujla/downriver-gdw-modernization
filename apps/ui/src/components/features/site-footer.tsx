import Link from "next/link";

import { siteConfig } from "../../content/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <p className="site-footer-title">{siteConfig.settings.name}</p>
          <p className="site-footer-copy">
            {siteConfig.settings.description}
          </p>
        </div>

        <nav aria-label="Footer" className="site-footer-nav">
          {siteConfig.navigation.footer.map((item) => (
            <Link key={item.href} className="site-footer-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
