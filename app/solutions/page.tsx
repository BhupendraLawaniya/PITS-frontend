// import type { Metadata } from "next";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Solutions – Professional ITS | E-Commerce Back-Office Services",
//   description:
//     "Catalog & product data operations, marketplace management, ecommerce backoffice, data cleanup, and high-SKU scaling. Execution-heavy solutions for online sellers.",
//   keywords: [
//     "ecommerce catalog management",
//     "marketplace operations",
//     "Amazon listing optimization",
//     "product data cleanup",
//     "ecommerce back-office solutions",
//     "high SKU catalog scaling",
//   ],
//   openGraph: {
//     title: "Solutions – Professional ITS",
//     description:
//       "Every back-office solution your e-commerce business needs — catalog, marketplace, backoffice, cleanup, and scaling.",
//     url: "https://professionalits.com/solutions",
//     siteName: "Professional ITS",
//     type: "website",
//   },
// };

// const solutions = [
//   {
//     id: "catalog",
//     num: "01",
//     tag: "CATALOG & PRODUCT DATA",
//     title: "Catalog & product data operations",
//     tagline: "The foundation everything else depends on.",
//     description:
//       "High-SKU catalog builds, attribute structuring, bulk uploads, deduplication, and ongoing maintenance. We handle the full data pipeline — from raw supplier feeds to clean, live, platform-ready listings.",
//     includes: [
//       "Bulk product uploads to any major platform",
//       "Attribute & filter structuring to platform taxonomy",
//       "AI-assisted product description generation",
//       "Deduplication and data normalisation",
//       "Ongoing catalog maintenance retainers",
//       "Supplier feed ingestion and field mapping",
//     ],
//     platforms: ["Amazon", "Shopify", "eBay", "BigCommerce", "WooCommerce", "Magento"],
//     stat1: { n: "99.1%", l: "Accuracy rate" },
//     stat2: { n: "48hr", l: "Turnaround" },
//     ai: true,
//   },
//   {
//     id: "marketplace",
//     num: "02",
//     tag: "MARKETPLACE OPERATIONS",
//     title: "Marketplace operations",
//     tagline: "Better listings. More visibility. Stronger Buy Box.",
//     description:
//       "Listing optimisation, Buy Box strategy, suppressed listing management, and competitor intelligence — across Amazon, eBay, and Walmart. We manage the operational complexity of multi-channel selling so you don't have to.",
//     includes: [
//       "Amazon listing optimisation — titles, bullets, A+ content",
//       "Buy Box monitoring and repricing strategy",
//       "Suppressed and stranded listing recovery",
//       "eBay Cassini-optimised listings and store management",
//       "Walmart Seller Center setup and maintenance",
//       "Competitor tracking and marketplace intelligence",
//     ],
//     platforms: ["Amazon", "eBay", "Walmart"],
//     stat1: { n: "3x", l: "Avg. visibility lift" },
//     stat2: { n: "500+", l: "Stores managed" },
//     ai: false,
//   },
//   {
//     id: "backoffice",
//     num: "03",
//     tag: "ECOMMERCE BACKOFFICE",
//     title: "Ecommerce backoffice management",
//     tagline: "Your full back-office. Handled. On an SLA.",
//     description:
//       "Customer support, order processing, inventory monitoring, and repricing — delivered as a managed service with SLAs you can hold us to. We operate as an extension of your team, not a one-off contractor.",
//     includes: [
//       "Customer support — email, chat, marketplace messaging",
//       "Order processing and fulfilment coordination",
//       "Inventory level monitoring and reorder alerts",
//       "Returns and refund management",
//       "Repricing execution and rule management",
//       "Weekly operational reports and SLA tracking",
//     ],
//     platforms: ["Amazon", "Shopify", "eBay", "WooCommerce"],
//     stat1: { n: "4hr", l: "Response SLA" },
//     stat2: { n: "98%", l: "Retention rate" },
//     ai: false,
//   },
//   {
//     id: "cleanup",
//     num: "04",
//     tag: "PRODUCT DATA CLEANUP",
//     title: "Product data cleanup & optimisation",
//     tagline: "Messy data is costing you sales. We fix it.",
//     description:
//       "Duplicate SKUs, missing attributes, wrong categories, inconsistent formatting — bad data silently kills your search visibility and conversion rate. We audit, clean, deduplicate, and restructure at scale.",
//     includes: [
//       "Full catalog data audit and scoring",
//       "Duplicate detection and merging",
//       "Missing attribute identification and enrichment",
//       "Category and subcategory correction",
//       "Title and description standardisation",
//       "Post-cleanup QA and accuracy report",
//     ],
//     platforms: ["Amazon", "Shopify", "eBay", "BigCommerce", "Magento", "WooCommerce"],
//     stat1: { n: "72hr", l: "1,000 SKU cleanup" },
//     stat2: { n: "AI", l: "Assisted at scale" },
//     ai: true,
//   },
//   {
//     id: "high-sku",
//     num: "05",
//     tag: "HIGH-SKU CATALOG SCALING",
//     title: "High-SKU catalog scaling",
//     tagline: "Scale to 500,000 SKUs without scaling headcount.",
//     description:
//       "For distributors, wholesalers, and multi-brand sellers who need to scale catalog operations beyond what a small team can handle. We build the pipeline, handle the volume, and maintain accuracy at scale.",
//     includes: [
//       "Supplier feed ingestion and automated mapping",
//       "High-volume bulk upload pipelines",
//       "Multi-brand catalog architecture",
//       "Cross-platform synchronisation",
//       "Ongoing scaled maintenance retainers",
//       "Dedicated account manager for 500+ SKU accounts",
//     ],
//     platforms: ["Amazon", "Shopify", "BigCommerce", "Magento", "Walmart"],
//     stat1: { n: "500K+", l: "SKUs managed" },
//     stat2: { n: "15yrs", l: "Operations experience" },
//     ai: true,
//   },
// ];

// const CheckIcon = () => (
//   <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>
//     <svg viewBox="0 0 10 10" style={{ width: "10px", height: "10px" }} fill="none">
//       <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   </div>
// );

// export default function SolutionsPage() {
//   return (
//     <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>

//       {/* hover style for jump links — CSS only, no JS needed */}
//       <style>{`
//         .jump-link:hover {
//           border-color: #2D6A4F !important;
//           color: #2D6A4F !important;
//         }
//         html { scroll-behavior: smooth; }
//       `}</style>
      
//       <Navbar />

//       {/* ── PAGE HERO ── */}
//       <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
//         <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
//           Home <span style={{ color: "#2D6A4F" }}>/ Solutions</span>
//         </div>
//         <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "34px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "12px" }}>
//           Solutions for every e-commerce <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>operation.</em>
//         </h1>
//         <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.7, maxWidth: "560px", marginBottom: "24px" }}>
//           From catalog builds to full back-office management — we handle the operational work that slows your business down. Execution-heavy. SLA-backed. No lock-in.
//         </p>

//         {/* Quick jump links — hover handled by CSS class, no event handlers */}
//         <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//           {solutions.map((s) => (
//             <a
//               key={s.id}
//               href={`#${s.id}`}
//               className="jump-link"
//               style={{
//                 background: "#FFFFFF",
//                 border: "0.5px solid #D5C9B0",
//                 borderRadius: "4px",
//                 padding: "6px 14px",
//                 fontSize: "12px",
//                 color: "#555550",
//                 textDecoration: "none",
//                 transition: "border-color 0.15s, color 0.15s",
//               }}
//             >
//               {s.num} {s.tag.split(" ").slice(0, 2).join(" ")}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* ── SOLUTIONS SECTIONS ── */}
//       {solutions.map((s, idx) => (
//         <section
//           key={s.id}
//           id={s.id}
//           style={{
//             padding: "64px 32px",
//             background: idx % 2 === 0 ? "#FDFAF5" : "#F5F0E8",
//             borderBottom: "0.5px solid #D5C9B0",
//             scrollMarginTop: "56px",
//           }}
//         >
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "64px", alignItems: "start" }}>

//             {/* LEFT — content */}
//             <div>
//               <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
//                 <div style={{ fontFamily: "var(--font-serif)", fontSize: "32px", color: "#D5C9B0", fontWeight: 500, lineHeight: 1 }}>{s.num}</div>
//                 <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500 }}>{s.tag}</div>
//                 {s.ai && (
//                   <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#E8F5EE", color: "#085041", fontSize: "10px", padding: "3px 8px", borderRadius: "3px" }}>
//                     <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2D6A4F" }} />
//                     AI-assisted
//                   </div>
//                 )}
//               </div>

//               <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "6px", lineHeight: 1.2 }}>
//                 {s.title}
//               </h2>
//               <p style={{ fontSize: "13px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>{s.tagline}</p>
//               <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, marginBottom: "28px", maxWidth: "520px" }}>
//                 {s.description}
//               </p>

//               {/* What's included */}
//               <div style={{ marginBottom: "28px" }}>
//                 <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", letterSpacing: "0.5px", marginBottom: "14px" }}>WHAT&apos;S INCLUDED</div>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
//                   {s.includes.map((item) => (
//                     <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
//                       <CheckIcon />
//                       <span style={{ fontSize: "13px", color: "#555550", lineHeight: 1.5 }}>{item}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Platforms */}
//               <div>
//                 <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", letterSpacing: "0.5px", marginBottom: "10px" }}>PLATFORMS</div>
//                 <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//                   {s.platforms.map((p) => (
//                     <div key={p} style={{ border: "0.5px solid #D5C9B0", borderRadius: "3px", padding: "5px 12px", fontSize: "12px", color: "#555550", background: "#FDFAF5" }}>
//                       {p}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT — stat card + CTA */}
//             <div>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
//                 <div style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
//                   <div style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 500, color: "#2D6A4F" }}>{s.stat1.n}</div>
//                   <div style={{ fontSize: "11px", color: "#888780", marginTop: "4px" }}>{s.stat1.l}</div>
//                 </div>
//                 <div style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
//                   <div style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 500, color: "#2D6A4F" }}>{s.stat2.n}</div>
//                   <div style={{ fontSize: "11px", color: "#888780", marginTop: "4px" }}>{s.stat2.l}</div>
//                 </div>
//               </div>

//               <div style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "24px" }}>
//                 <div style={{ fontSize: "13px", fontWeight: 500, color: "#1C1C1C", marginBottom: "6px" }}>
//                   Interested in {s.title.split(" ").slice(0, 3).join(" ")}?
//                 </div>
//                 <div style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6, marginBottom: "18px" }}>
//                   Start with a free 50-SKU audit. We&apos;ll review your current setup and show you exactly what we&apos;d fix.
//                 </div>
//                 <Link href="/audit"
//                   style={{ display: "block", background: "#2D6A4F", color: "#fff", padding: "11px 20px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textAlign: "center", textDecoration: "none", marginBottom: "10px" }}>
//                   Get free catalog audit
//                 </Link>
//                 <Link href="/pricing"
//                   style={{ display: "block", border: "0.5px solid #D5C9B0", color: "#555550", padding: "10px 20px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none" }}>
//                   View pricing
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       ))}

//       {/* ── BOTTOM CTA BANNER ── */}
//       <div style={{ background: "#1C1C1C", padding: "48px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <div>
//           <div style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
//             Not sure which solution fits?
//           </div>
//           <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "480px", lineHeight: 1.7 }}>
//             Start with the free catalog audit. We&apos;ll review your store and recommend exactly which services would have the most impact.
//           </div>
//         </div>
//         <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
//           <Link href="/audit"
//             style={{ background: "#2D6A4F", color: "#fff", padding: "13px 28px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
//             Get free catalog audit
//           </Link>
//           <Link href="/pricing"
//             style={{ border: "0.5px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", padding: "13px 28px", borderRadius: "4px", fontSize: "13px", textDecoration: "none", whiteSpace: "nowrap" }}>
//             View pricing
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
