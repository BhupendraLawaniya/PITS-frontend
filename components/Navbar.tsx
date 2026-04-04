"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const solutionLinks = [
  {
    title: "Catalog & product data",
    sub: "Uploads, enrichment, deduplication",
    href: "/solutions/catalog-product-data",
  },
  {
    title: "Marketplace operations",
    sub: "Amazon, eBay, Walmart",
    href: "/solutions/marketplace-operations",
  },
  {
    title: "Ecommerce backoffice",
    sub: "Support, orders, inventory",
    href: "/solutions/ecommerce-backoffice",
  },
  {
    title: "Product data cleanup",
    sub: "Audit, clean, restructure",
    href: "/solutions/product-data-cleanup",
  },
  {
    title: "High-SKU catalog scaling",
    sub: "Distributors & wholesalers",
    href: "/solutions/high-sku-scaling",
  },
];

const serviceLinks = [
  {
    title: "Product data management",
    sub: "End-to-end data pipeline",
    href: "/services/product-data-management",
  },
  {
    title: "Bulk product uploads",
    sub: "Any platform, any volume",
    href: "/services/bulk-product-uploads",
  },
  {
    title: "Attribute & filter structuring",
    sub: "Platform compliance & discoverability",
    href: "/services/attribute-filter-structuring",
  },
  {
    title: "Image processing & enrichment",
    sub: "Background removal, resizing, infographics",
    href: "/services/image-processing-enrichment",
  },
  {
    title: "Order & inventory support",
    sub: "SLA-backed operations",
    href: "/services/order-inventory-support",
  },
];

const platformLinks = [
  {
    title: "Amazon",
    sub: "Seller Central, FBA, A+",
    href: "/platforms/amazon",
  },
  { title: "eBay", sub: "Cassini, store management", href: "/platforms/ebay" },
  {
    title: "Shopify",
    sub: "Catalog, orders, support",
    href: "/platforms/shopify",
  },
  { title: "Etsy", sub: "Catalog, orders, support", href: "/platforms/etsy" },
  {
    title: "BigCommerce / WooCommerce / Magento",
    sub: null,
    href: "/platforms/bigcommerce-woocommerce",
  },
  { title: "Walmart & others", sub: null, href: "/platforms/walmart" },
];

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const toggle = (id: string) => setOpen(open === id ? null : id);
  const close = () => setOpen(null);
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };
  const toggleMobile = (id: string) =>
    setMobileExpanded(mobileExpanded === id ? null : id);

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-cta-desktop { display: block; }
        .nav-hamburger { display: none; }
        @media (max-width: 900px) {
          .nav-desktop-links { display: none; }
          .nav-cta-desktop { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav
        style={{
          background: "#FDFAF5",
          borderBottom: "0.5px solid #D5C9B0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => {
            close();
            closeMobile();
          }}
          style={{ textDecoration: "none", flexShrink: 0 }}
        >
          <img
            src="/Logo_Pits_new.png"
            alt="Professional ITS Logo"
            style={{ height: "50px" }}
          />
        </Link>

        {/* ── DESKTOP LINKS ── */}
        <div
          className="nav-desktop-links"
          style={{ alignItems: "center", gap: 0 }}
        >
          {/* Solutions dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("solutions")}
              style={{
                padding: "0 14px",
                fontSize: "15px",
                color: pathname.startsWith("/solutions")
                  ? "#2D6A4F"
                  : "#555550",
                cursor: "pointer",
                height: "56px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderBottom: pathname.startsWith("/solutions")
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              }}
            >
              Solutions
              <svg
                viewBox="0 0 10 6"
                style={{
                  width: 10,
                  height: 10,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                }}
              >
                <path d="M1 1l4 4 4-4" />
              </svg>
            </div>
            {open === "solutions" && (
              <div
                style={{
                  background: "#FDFAF5",
                  border: "0.5px solid #D5C9B0",
                  padding: "20px",
                  position: "absolute",
                  top: "56px",
                  left: 0,
                  minWidth: "480px",
                  zIndex: 10,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0 24px",
                }}
              >
                <div
                  style={{
                    gridColumn: "1/-1",
                    marginBottom: "12px",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "#2D6A4F",
                    fontWeight: 500,
                  }}
                >
                  Solutions
                </div>
                <div>
                  {solutionLinks.slice(0, 3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      style={{
                        display: "block",
                        padding: "8px 0",
                        borderBottom: "0.5px solid #EDE5D5",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
                <div>
                  {solutionLinks.slice(3).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      style={{
                        display: "block",
                        padding: "8px 0",
                        borderBottom: "0.5px solid #EDE5D5",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("services")}
              style={{
                padding: "0 14px",
                fontSize: "15px",
                color: pathname === "/services" ? "#2D6A4F" : "#555550",
                cursor: "pointer",
                height: "56px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderBottom:
                  pathname === "/services"
                    ? "2px solid #2D6A4F"
                    : "2px solid transparent",
              }}
            >
              Services
              <svg
                viewBox="0 0 10 6"
                style={{
                  width: 10,
                  height: 10,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                }}
              >
                <path d="M1 1l4 4 4-4" />
              </svg>
            </div>
            {open === "services" && (
              <div
                style={{
                  background: "#FDFAF5",
                  border: "0.5px solid #D5C9B0",
                  padding: "20px",
                  position: "absolute",
                  top: "56px",
                  left: 0,
                  minWidth: "320px",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "#2D6A4F",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  Execution services
                </div>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={close}
                    style={{
                      display: "block",
                      padding: "8px 0",
                      borderBottom: "0.5px solid #EDE5D5",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#1C1C1C",
                        marginBottom: "2px",
                      }}
                    >
                      {s.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#888780" }}>
                      {s.sub}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Platforms dropdown */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("platforms")}
              style={{
                padding: "0 14px",
                fontSize: "15px",
                color: pathname.startsWith("/platforms")
                  ? "#2D6A4F"
                  : "#555550",
                cursor: "pointer",
                height: "56px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                borderBottom: pathname.startsWith("/platforms")
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              }}
            >
              Platforms
              <svg
                viewBox="0 0 10 6"
                style={{
                  width: 10,
                  height: 10,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                }}
              >
                <path d="M1 1l4 4 4-4" />
              </svg>
            </div>
            {open === "platforms" && (
              <div
                style={{
                  background: "#FDFAF5",
                  border: "0.5px solid #D5C9B0",
                  padding: "20px",
                  position: "absolute",
                  top: "56px",
                  left: 0,
                  minWidth: "280px",
                  zIndex: 10,
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    color: "#2D6A4F",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  Platforms we support
                </div>
                {platformLinks.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={close}
                    style={{
                      display: "block",
                      padding: "8px 0",
                      borderBottom: "0.5px solid #EDE5D5",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#1C1C1C",
                        marginBottom: "2px",
                      }}
                    >
                      {p.title}
                    </div>
                    {p.sub && (
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {p.sub}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/results"
            onClick={close}
            style={{
              padding: "0 14px",
              fontSize: "15px",
              color: pathname === "/results" ? "#2D6A4F" : "#555550",
              height: "56px",
              display: "flex",
              alignItems: "center",
              borderBottom:
                pathname === "/results"
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              textDecoration: "none",
            }}
          >
            Results
          </Link>
          <Link
            href="/pricing"
            onClick={close}
            style={{
              padding: "0 14px",
              fontSize: "15px",
              color: pathname === "/pricing" ? "#2D6A4F" : "#555550",
              height: "56px",
              display: "flex",
              alignItems: "center",
              borderBottom:
                pathname === "/pricing"
                  ? "2px solid #2D6A4F"
                  : "2px solid transparent",
              textDecoration: "none",
            }}
          >
            Pricing
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/audit"
          className="nav-cta-desktop"
          style={{
            background: "#2D6A4F",
            textDecoration: "none",
            color: "#fff",
            padding: "9px 18px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          Get free catalog audit
        </Link>

        {/* ── HAMBURGER (mobile only) ── */}
        <button
          className="nav-hamburger"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpen(null);
          }}
          aria-label="Toggle navigation menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#1C1C1C",
              transition: "transform 0.2s",
              transform: mobileOpen
                ? "rotate(45deg) translateY(6.5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#1C1C1C",
              transition: "opacity 0.2s",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1.5px",
              background: "#1C1C1C",
              transition: "transform 0.2s",
              transform: mobileOpen
                ? "rotate(-45deg) translateY(-6.5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* ── MOBILE MENU PANEL ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "#FDFAF5",
            zIndex: 49,
            overflowY: "auto",
            borderTop: "0.5px solid #D5C9B0",
          }}
        >
          <div style={{ padding: "8px 24px 40px" }}>
            {/* Solutions accordion */}
            <div style={{ borderBottom: "0.5px solid #EDE5D5" }}>
              <div
                onClick={() => toggleMobile("solutions")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: pathname.startsWith("/solutions")
                    ? "#2D6A4F"
                    : "#1C1C1C",
                  cursor: "pointer",
                }}
              >
                Solutions
                <svg
                  viewBox="0 0 10 6"
                  style={{
                    width: 12,
                    height: 12,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    transition: "transform 0.2s",
                    transform:
                      mobileExpanded === "solutions"
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
              {mobileExpanded === "solutions" && (
                <div style={{ paddingBottom: "12px" }}>
                  {solutionLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      style={{
                        display: "block",
                        padding: "10px 0 10px 16px",
                        borderTop: "0.5px solid #F5F0E8",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services accordion */}
            <div style={{ borderBottom: "0.5px solid #EDE5D5" }}>
              <div
                onClick={() => toggleMobile("services")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: pathname === "/services" ? "#2D6A4F" : "#1C1C1C",
                  cursor: "pointer",
                }}
              >
                Services
                <svg
                  viewBox="0 0 10 6"
                  style={{
                    width: 12,
                    height: 12,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    transition: "transform 0.2s",
                    transform:
                      mobileExpanded === "services" ? "rotate(180deg)" : "none",
                  }}
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
              {mobileExpanded === "services" && (
                <div style={{ paddingBottom: "12px" }}>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={closeMobile}
                      style={{
                        display: "block",
                        padding: "10px 0 10px 16px",
                        borderTop: "0.5px solid #F5F0E8",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {s.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>
                        {s.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Platforms accordion */}
            <div style={{ borderBottom: "0.5px solid #EDE5D5" }}>
              <div
                onClick={() => toggleMobile("platforms")}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: pathname.startsWith("/platforms")
                    ? "#2D6A4F"
                    : "#1C1C1C",
                  cursor: "pointer",
                }}
              >
                Platforms
                <svg
                  viewBox="0 0 10 6"
                  style={{
                    width: 12,
                    height: 12,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    transition: "transform 0.2s",
                    transform:
                      mobileExpanded === "platforms"
                        ? "rotate(180deg)"
                        : "none",
                  }}
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </div>
              {mobileExpanded === "platforms" && (
                <div style={{ paddingBottom: "12px" }}>
                  {platformLinks.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={closeMobile}
                      style={{
                        display: "block",
                        padding: "10px 0 10px 16px",
                        borderTop: "0.5px solid #F5F0E8",
                        textDecoration: "none",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#1C1C1C",
                          marginBottom: "2px",
                        }}
                      >
                        {p.title}
                      </div>
                      {p.sub && (
                        <div style={{ fontSize: "11px", color: "#888780" }}>
                          {p.sub}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Results & Pricing */}
            <Link
              href="/results"
              onClick={closeMobile}
              style={{
                display: "block",
                padding: "16px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: pathname === "/results" ? "#2D6A4F" : "#1C1C1C",
                borderBottom: "0.5px solid #EDE5D5",
                textDecoration: "none",
              }}
            >
              Results
            </Link>
            <Link
              href="/pricing"
              onClick={closeMobile}
              style={{
                display: "block",
                padding: "16px 0",
                fontSize: "15px",
                fontWeight: 500,
                color: pathname === "/pricing" ? "#2D6A4F" : "#1C1C1C",
                borderBottom: "0.5px solid #EDE5D5",
                textDecoration: "none",
              }}
            >
              Pricing
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/audit"
              onClick={closeMobile}
              style={{
                display: "block",
                marginTop: "24px",
                background: "#2D6A4F",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Get free catalog audit
            </Link>
          </div>
        </div>
      )}

      {/* Desktop dropdown backdrop */}
      {open && (
        <div
          onClick={close}
          style={{ position: "fixed", inset: 0, zIndex: 40 }}
        />
      )}
    </>
  );
}
