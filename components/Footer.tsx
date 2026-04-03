export default function Footer() {
  return (
    <footer style={{ background: "#F5F0E8", borderTop: "0.5px solid #D5C9B0", padding: "40px 32px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "32px", marginBottom: "32px" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "16px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px" }}>
            Professional <em style={{ color: "#2D6A4F" }}>ITS</em>
          </div>
          <div style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6 }}>
            E-commerce back-office specialists since 2010. We handle catalog operations, marketplace management, and store back-office — exclusively for online sellers.
          </div>
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>Solutions</div>
          {["Catalog & data operations", "Marketplace operations", "Ecommerce backoffice", "Data cleanup", "High-SKU scaling"].map((l) => (
            <span key={l} style={{ fontSize: "12px", color: "#888780", marginBottom: "6px", display: "block", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>Services</div>
          {["Product data management", "Bulk uploads", "Attribute structuring", "Image processing", "Order support"].map((l) => (
            <span key={l} style={{ fontSize: "12px", color: "#888780", marginBottom: "6px", display: "block", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>Platforms</div>
          {["Amazon", "eBay", "Shopify", "Walmart", "BigCommerce & more"].map((l) => (
            <span key={l} style={{ fontSize: "12px", color: "#888780", marginBottom: "6px", display: "block", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "10px", letterSpacing: "0.5px" }}>Company</div>
          {["Results", "Pricing", "Free catalog audit", "Contact"].map((l) => (
            <span key={l} style={{ fontSize: "12px", color: "#888780", marginBottom: "6px", display: "block", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "0.5px solid #D5C9B0", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "11px", color: "#B4B2A9" }}>© 2025 Professional ITS · professionalits.com</div>
        <div style={{ fontSize: "11px", color: "#B4B2A9" }}>US: +1-551-xxx-xxxx · India: +91-xxx-xxx-xxxx</div>
      </div>
    </footer>
  );
}
