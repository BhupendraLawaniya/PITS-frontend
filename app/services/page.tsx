import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services – Professional ITS",
  description: "Every execution service we provide. Product data management, bulk uploads, attribute structuring, image processing, and order support.",
};

const servicesList = [
  {
    title: "Product data management",
    body: "End-to-end management of your product information — from ingesting supplier data to maintaining live platform records. Includes field mapping, data transformation, and quality assurance at every stage.",
  },
  {
    title: "Bulk product uploads",
    body: "High-volume product uploads to any major platform using flat files, APIs, or direct platform tools. We manage template preparation, validation, submission, and error correction.",
  },
  {
    title: "Attribute & filter structuring",
    body: "Standardising product attributes for platform compliance, search filter accuracy, and buyer discoverability. Critical for technical and multi-variant product categories.",
  },
  {
    title: "Image processing & enrichment",
    body: "Background removal, resizing, format conversion, infographic creation, and compliance with marketplace image requirements. Standalone or integrated with listing work.",
  },
  {
    title: "Order & inventory support",
    body: "Order processing, fulfilment tracking, inventory level monitoring, and reorder point management. Delivered as a managed service with agreed SLAs.",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "16px" }}>Services</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "32px", fontWeight: 500, color: "#1C1C1C", marginBottom: "12px" }}>
          Every execution service we <em style={{ color: "#2D6A4F" }}>provide.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.65, maxWidth: "560px" }}>
          For buyers who know exactly what they need. All services are available standalone or as part of a monthly retainer.
        </p>
      </div>

      <section style={{ padding: "56px 32px", background: "#FDFAF5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {servicesList.map((s) => (
            <div key={s.title}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px" }}>{s.title}</h2>
              <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}

          {/* Pricing card */}
          <div style={{ background: "#E8F5EE", borderRadius: "8px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "11px", color: "#085041", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.5px" }}>PRICING</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "18px", color: "#085041", marginBottom: "6px" }}>From $0.50 per SKU</div>
            <div style={{ fontSize: "12px", color: "#0F6E56", marginBottom: "14px" }}>Volume discounts for 500+ SKUs. Monthly retainers from $350/month.</div>
            <div style={{ background: "#2D6A4F", color: "#fff", padding: "10px 20px", borderRadius: "4px", fontSize: "12px", fontWeight: 500, display: "inline-block", cursor: "pointer" }}>
              View full pricing
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
