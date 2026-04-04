import Link from "next/link";

const solutionLinks = [
  { label: "Catalog & data operations", href: "/solutions/catalog-product-data" },
  { label: "Marketplace operations", href: "/solutions/marketplace-operations" },
  { label: "Ecommerce backoffice", href: "/solutions/ecommerce-backoffice" },
  { label: "Data cleanup", href: "/solutions/product-data-cleanup" },
  { label: "High-SKU scaling", href: "/solutions/high-sku-scaling" },
];

const serviceLinks = [
  { label: "Product data management", href: "/services" },
  { label: "Bulk uploads", href: "/services" },
  { label: "Attribute structuring", href: "/services" },
  { label: "Image processing", href: "/services" },
  { label: "Order support", href: "/services" },
];

const platformLinks = [
  { label: "Amazon",                      href: "/platform/amazon" },
  { label: "eBay",                        href: "/platform/ebay" },
  { label: "Shopify",                     href: "/platform/shopify" },
  { label: "Etsy",                        href: "/platform/etsy" },
  { label: "BigCommerce & WooCommerce",   href: "/platform/bigcommerce-woocommerce" },
  { label: "Walmart & others",            href: "/platform/walmart" },
];

const companyLinks = [
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "Free catalog audit", href: "/audit" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#F5F0E8", borderTop: "0.5px solid #D5C9B0", padding: "40px 32px 24px" }}>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 32px;
          margin-bottom: 32px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .footer-brand-col {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-brand-col {
            grid-column: 1;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
        .footer-link {
          font-size: 12px;
          color: #888780;
          margin-bottom: 6px;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }
        .footer-link:hover { color: #2D6A4F; }
      `}</style>

      <div className="footer-grid">

        {/* Brand column */}
        <div className="footer-brand-col">
          <div style={{ marginBottom: "12px" }}>
            <img src="/Logo_footer.png" alt="Professional ITS Logo" style={{ height: "55px" }} />
          </div>
          <div style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6, maxWidth: "320px" }}>
            E-commerce back-office specialists since 2010. We handle catalog
            operations, marketplace management, and store back-office —
            exclusively for online sellers.
          </div>
        </div>

        {/* Solutions */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Solutions
          </div>
          {solutionLinks.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Services
          </div>
          {serviceLinks.map((l) => (
            <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
          ))}
        </div>

        {/* Platforms */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Platforms
          </div>
          {platformLinks.map((l) => (
            <span key={l.label} className="footer-link">{l.label}</span>
          ))}
        </div>

        {/* Company */}
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>
            Company
          </div>
          {companyLinks.map((l) =>
            l.href ? (
              <Link key={l.label} href={l.href} className="footer-link">{l.label}</Link>
            ) : (
              <span key={l.label} className="footer-link">{l.label}</span>
            )
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "0.5px solid #D5C9B0", paddingTop: "20px" }}>
        <div className="footer-bottom">
          <div style={{ fontSize: "11px", color: "#B4B2A9" }}>
            © 2025 Professional ITS · professionalits.com
          </div>
          <div style={{ fontSize: "11px", color: "#B4B2A9" }}>
            US: +1-551-xxx-xxxx · India: +91-xxx-xxx-xxxx
          </div>
        </div>
      </div>

    </footer>
  );
}
