"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();

  const toggle = (id: string) => setOpen(open === id ? null : id);
  const close = () => setOpen(null);

  return (
    <>
      <nav
        style={{
          background: "#FDFAF5",
          borderBottom: "0.5px solid #D5C9B0",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        {/* Logo — unchanged */}
        <Link href="/" onClick={close} style={{ textDecoration: "none" }}>
          <img src="/Logo_Pits_new.png" alt="Logo" style={{ height: "58px" }} />
        </Link>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 0 }}>

          {/* Solutions */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("solutions")}
              style={{ padding: "0 14px", fontSize: "15px", color: pathname.startsWith("/solutions") ? "#2D6A4F" : "#555550", cursor: "pointer", height: "56px", display: "flex", alignItems: "center", gap: "4px", borderBottom: pathname.startsWith("/solutions") ? "2px solid #2D6A4F" : "2px solid transparent" }}
            >
              Solutions
              <svg viewBox="0 0 10 6" style={{ width: 10, height: 10, fill: "none", stroke: "currentColor", strokeWidth: 2 }}><path d="M1 1l4 4 4-4" /></svg>
            </div>
            {open === "solutions" && (
              <div style={{ background: "#FDFAF5", border: "0.5px solid #D5C9B0", padding: "20px", position: "absolute", top: "56px", left: 0, minWidth: "480px", zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
                <div style={{ gridColumn: "1/-1", marginBottom: "12px", fontSize: "10px", letterSpacing: "1px", color: "#2D6A4F", fontWeight: 500 }}>Solutions</div>
                <div>
                  {[
                    { title: "Catalog & product data", sub: "Uploads, enrichment, deduplication", href: "/solutions#catalog" },
                    { title: "Marketplace operations", sub: "Amazon, eBay, Walmart", href: "/solutions#marketplace" },
                    { title: "Ecommerce backoffice", sub: "Support, orders, inventory", href: "/solutions#backoffice" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} style={{ display: "block", padding: "8px 0", borderBottom: "0.5px solid #EDE5D5", textDecoration: "none" }}>
                      <div style={{ fontSize: "13px", fontWeight: 500, color: "#1C1C1C", marginBottom: "2px" }}>{item.title}</div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>{item.sub}</div>
                    </Link>
                  ))}
                </div>
                <div>
                  {[
                    { title: "Product data cleanup", sub: "Audit, clean, restructure", href: "/solutions#cleanup" },
                    { title: "High-SKU catalog scaling", sub: "Distributors & wholesalers", href: "/solutions#high-sku" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} onClick={close} style={{ display: "block", padding: "8px 0", borderBottom: "0.5px solid #EDE5D5", textDecoration: "none" }}>
                      <div style={{ fontSize: "13px", fontWeight: 500, color: "#1C1C1C", marginBottom: "2px" }}>{item.title}</div>
                      <div style={{ fontSize: "11px", color: "#888780" }}>{item.sub}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services — unchanged */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("services")}
              style={{ padding: "0 14px", fontSize: "15px", color: pathname === "/services" ? "#2D6A4F" : "#555550", cursor: "pointer", height: "56px", display: "flex", alignItems: "center", gap: "4px", borderBottom: pathname === "/services" ? "2px solid #2D6A4F" : "2px solid transparent" }}
            >
              Services
              <svg viewBox="0 0 10 6" style={{ width: 10, height: 10, fill: "none", stroke: "currentColor", strokeWidth: 2 }}><path d="M1 1l4 4 4-4" /></svg>
            </div>
            {open === "services" && (
              <div style={{ background: "#FDFAF5", border: "0.5px solid #D5C9B0", padding: "20px", position: "absolute", top: "56px", left: 0, minWidth: "280px", zIndex: 10 }}>
                <div style={{ fontSize: "10px", letterSpacing: "1px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>Execution services</div>
                {["Product data management", "Bulk product uploads", "Attribute & filter structuring", "Image processing & enrichment", "Order & inventory support"].map((s) => (
                  <Link key={s} href="/services" onClick={close} style={{ display: "block", padding: "8px 0", borderBottom: "0.5px solid #EDE5D5", fontSize: "13px", fontWeight: 500, color: "#1C1C1C", textDecoration: "none" }}>{s}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Platforms — unchanged */}
          <div style={{ position: "relative" }}>
            <div
              onClick={() => toggle("platforms")}
              style={{ padding: "0 14px", fontSize: "15px", color: "#555550", cursor: "pointer", height: "56px", display: "flex", alignItems: "center", gap: "4px", borderBottom: "2px solid transparent" }}
            >
              Platforms
              <svg viewBox="0 0 10 6" style={{ width: 10, height: 10, fill: "none", stroke: "currentColor", strokeWidth: 2 }}><path d="M1 1l4 4 4-4" /></svg>
            </div>
            {open === "platforms" && (
              <div style={{ background: "#FDFAF5", border: "0.5px solid #D5C9B0", padding: "20px", position: "absolute", top: "56px", left: 0, minWidth: "280px", zIndex: 10 }}>
                <div style={{ fontSize: "10px", letterSpacing: "1px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>Platforms we support</div>
                {[
                  { title: "Amazon", sub: "Seller Central, FBA, A+" },
                  { title: "eBay", sub: "Cassini, store management" },
                  { title: "Shopify", sub: "Catalog, orders, support" },
                  { title: "Etsy", sub: "Catalog, orders, support" },
                  { title: "BigCommerce / WooCommerce / Magento", sub: null },
                  { title: "Walmart & others", sub: null },
                ].map((p) => (
                  <div key={p.title} style={{ padding: "8px 0", borderBottom: "0.5px solid #EDE5D5", cursor: "pointer" }}>
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "#1C1C1C", marginBottom: "2px" }}>{p.title}</div>
                    {p.sub && <div style={{ fontSize: "11px", color: "#888780" }}>{p.sub}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Results & Pricing — unchanged */}
          <Link href="/results" onClick={close} style={{ padding: "0 14px", fontSize: "15px", color: pathname === "/results" ? "#2D6A4F" : "#555550", cursor: "pointer", height: "56px", display: "flex", alignItems: "center", borderBottom: pathname === "/results" ? "2px solid #2D6A4F" : "2px solid transparent", textDecoration: "none" }}>Results</Link>
          <Link href="/pricing" onClick={close} style={{ padding: "0 14px", fontSize: "15px", color: pathname === "/pricing" ? "#2D6A4F" : "#555550", cursor: "pointer", height: "56px", display: "flex", alignItems: "center", borderBottom: pathname === "/pricing" ? "2px solid #2D6A4F" : "2px solid transparent", textDecoration: "none" }}>Pricing</Link>
        </div>

        {/* CTA — unchanged */}
        <Link href="/audit" style={{ background: "#2D6A4F", textDecoration: "none", color: "#fff", padding: "9px 18px", borderRadius: "4px", fontSize: "12px", fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" }}>
          Get free catalog audit
        </Link>
      </nav>

      {/* Backdrop — unchanged */}
      {open && (
        <div onClick={close} style={{ position: "fixed", inset: 0, zIndex: 40 }} />
      )}
    </>
  );
}
