"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const topics = [
  "Catalog & product data operations",
  "Marketplace operations",
  "Ecommerce backoffice management",
  "Product data cleanup",
  "High-SKU catalog scaling",
  "Bulk product uploads",
  "Image processing",
  "Pricing & packages",
  "Partnership or reseller enquiry",
  "Other",
];

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 16 16" style={{ width: 14, height: 14 }} fill="none">
        <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email — US",
    value: "us@professionalits.com",
    sub: "General enquiries & sales",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" style={{ width: 14, height: 14 }} fill="none">
        <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email — India",
    value: "india@professionalits.com",
    sub: "Operations & support",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" style={{ width: 14, height: 14 }} fill="none">
        <path d="M3 3.5c0 5.523 4.477 10 10 10l1-2.5-2.5-1-.75 1.5A8.5 8.5 0 014.5 4.25L6 3.5 5 1 3 2l-.001 1.5z" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Phone — US",
    value: "+1-551-xxx-xxxx",
    sub: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: (
      <svg viewBox="0 0 16 16" style={{ width: 14, height: 14 }} fill="none">
        <path d="M3 3.5c0 5.523 4.477 10 10 10l1-2.5-2.5-1-.75 1.5A8.5 8.5 0 014.5 4.25L6 3.5 5 1 3 2l-.001 1.5z" stroke="#2D6A4F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Phone — India",
    value: "+91-xxx-xxx-xxxx",
    sub: "Mon–Sat, 9am–7pm IST",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9am – 6pm EST / 9am – 7pm IST" },
  { day: "Saturday", time: "9am – 2pm IST (limited)" },
  { day: "Sunday", time: "Closed" },
];

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "0.5px solid #D5C9B0",
  borderRadius: "4px",
  fontSize: "13px",
  color: "#1C1C1C",
  background: "#FFFFFF",
  fontFamily: "inherit",
  outline: "none",
};

const labelStyle = {
  display: "block" as const,
  fontSize: "11px",
  fontWeight: 500,
  color: "#555550",
  marginBottom: "6px",
  letterSpacing: "0.3px",
};

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 32px", textAlign: "center" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#E8F5EE", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
            <svg viewBox="0 0 24 24" style={{ width: "24px", height: "24px" }} fill="none">
              <path d="M5 12L10 17L19 7" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontWeight: 500, color: "#1C1C1C", marginBottom: "12px" }}>
            Message received.
          </h1>
          <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.7, maxWidth: "420px", marginBottom: "32px" }}>
            Thanks for reaching out. We&apos;ll review your message and get back to you within 4 hours on business days.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <Link href="/" style={{ background: "#2D6A4F", color: "#fff", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
              Back to home
            </Link>
            <Link href="/audit" style={{ border: "0.5px solid #D5C9B0", color: "#555550", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", textDecoration: "none" }}>
              Get free audit
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          Home <span style={{ color: "#2D6A4F" }}>/ Contact</span>
        </div>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "12px" }}>GET IN TOUCH</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "34px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "12px" }}>
          Talk to someone who <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>knows the platforms.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, maxWidth: "560px" }}>
          Whether you have a specific project, a question about our services, or just want to understand what&apos;s possible — we respond within 4 hours on business days.
        </p>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 0 }}>

        {/* ── FORM ── */}
        <div style={{ padding: "40px 40px 56px", borderRight: "0.5px solid #D5C9B0" }}>
          <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>SEND US A MESSAGE</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#1C1C1C", marginBottom: "6px" }}>
            What can we help you with?
          </h2>
          <p style={{ fontSize: "12px", color: "#888780", lineHeight: 1.6, marginBottom: "28px" }}>
            Fill in the form and we&apos;ll get back to you within 4 hours on business days.
          </p>

          {/* Contact details */}
          <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#555550", fontWeight: 500, marginBottom: "14px" }}>YOUR DETAILS</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
            <div>
              <label style={labelStyle}>First name <span style={{ color: "#2D6A4F" }}>*</span></label>
              <input style={inputStyle} type="text" placeholder="Jane" />
            </div>
            <div>
              <label style={labelStyle}>Last name <span style={{ color: "#2D6A4F" }}>*</span></label>
              <input style={inputStyle} type="text" placeholder="Smith" />
            </div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>Business email <span style={{ color: "#2D6A4F" }}>*</span></label>
            <input style={inputStyle} type="email" placeholder="jane@yourstore.com" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "28px" }}>
            <div>
              <label style={labelStyle}>Phone number</label>
              <input style={inputStyle} type="tel" placeholder="+1 555 000 0000" />
            </div>
            <div>
              <label style={labelStyle}>Company / store name</label>
              <input style={inputStyle} type="text" placeholder="Your Store Ltd" />
            </div>
          </div>

          {/* Enquiry details */}
          <div style={{ borderTop: "0.5px solid #EDE5D5", paddingTop: "24px", marginBottom: "14px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "1.2px", color: "#555550", fontWeight: 500, marginBottom: "14px" }}>ENQUIRY DETAILS</div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>What are you enquiring about? <span style={{ color: "#2D6A4F" }}>*</span></label>
            <select style={{ ...inputStyle, appearance: "none" as const }}>
              <option value="">Select a topic</option>
              {topics.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
            <div>
              <label style={labelStyle}>Approximate catalog size</label>
              <select style={{ ...inputStyle, appearance: "none" as const }}>
                <option value="">Select range</option>
                <option>Under 500 SKUs</option>
                <option>500 – 2,000 SKUs</option>
                <option>2,000 – 10,000 SKUs</option>
                <option>10,000 – 50,000 SKUs</option>
                <option>50,000+ SKUs</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Primary platform</label>
              <select style={{ ...inputStyle, appearance: "none" as const }}>
                <option value="">Select platform</option>
                {["Amazon", "Shopify", "eBay", "Etsy", "WooCommerce", "BigCommerce", "Magento", "Walmart", "Other"].map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <label style={labelStyle}>Your message <span style={{ color: "#2D6A4F" }}>*</span></label>
            <textarea
              style={{ ...inputStyle, height: "120px", resize: "none" as const }}
              placeholder="Tell us about your project, current challenges, or what you'd like help with..."
            />
          </div>
          <div style={{ marginBottom: "28px" }}>
            <label style={labelStyle}>How did you hear about us?</label>
            <select style={{ ...inputStyle, appearance: "none" as const }}>
              <option value="">Select one</option>
              <option>Google search</option>
              <option>LinkedIn</option>
              <option>Referral from a colleague</option>
              <option>Industry forum or group</option>
              <option>Other</option>
            </select>
          </div>

          {/* Submit */}
          <div style={{ borderTop: "0.5px solid #EDE5D5", paddingTop: "24px" }}>
            <button
              onClick={() => setSubmitted(true)}
              style={{ width: "100%", background: "#2D6A4F", color: "#fff", border: "none", padding: "14px 24px", borderRadius: "4px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
            >
              Send message →
            </button>
            <div style={{ textAlign: "center", fontSize: "11px", color: "#888780", marginTop: "10px" }}>
              We respond within 4 hours on business days · Your data is never shared
            </div>
          </div>
        </div>

        {/* ── SIDEBAR ── */}
        <div style={{ padding: "32px 24px", background: "#FDFAF5" }}>

          {/* Contact info */}
          <div style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "16px", letterSpacing: "0.3px" }}>CONTACT DETAILS</div>
            {contactInfo.map((c, i) => (
              <div key={c.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: i < contactInfo.length - 1 ? "14px" : 0 }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#888780", marginBottom: "2px" }}>{c.label}</div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#1C1C1C" }}>{c.value}</div>
                  <div style={{ fontSize: "11px", color: "#888780", marginTop: "1px" }}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Office hours */}
          <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "14px", letterSpacing: "0.3px" }}>OFFICE HOURS</div>
            {hours.map((h) => (
              <div key={h.day} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "0.5px solid #EDE5D5" }}>
                <div style={{ fontSize: "12px", color: "#555550" }}>{h.day}</div>
                <div style={{ fontSize: "12px", color: h.time === "Closed" ? "#B4B2A9" : "#2D6A4F", fontWeight: 500 }}>{h.time}</div>
              </div>
            ))}
          </div>

          {/* Response time */}
          <div style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: "#1C1C1C", marginBottom: "14px", letterSpacing: "0.3px" }}>WHAT TO EXPECT</div>
            {[
              { n: "4hr", l: "First response SLA" },
              { n: "24hr", l: "Full proposal if needed" },
              { n: "48hr", l: "Free audit delivery" },
              { n: "98%", l: "Client retention rate" },
            ].map((s) => (
              <div key={s.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "0.5px solid #F5F0E8" }}>
                <div style={{ fontSize: "12px", color: "#555550" }}>{s.l}</div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "18px", fontWeight: 500, color: "#2D6A4F" }}>{s.n}</div>
              </div>
            ))}
          </div>

          {/* Prefer audit CTA */}
          <div style={{ background: "#E8F5EE", border: "0.5px solid #9FE1CB", borderRadius: "6px", padding: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 500, color: "#085041", marginBottom: "6px" }}>
              Prefer to start with an audit?
            </div>
            <div style={{ fontSize: "11px", color: "#0F6E56", lineHeight: 1.6, marginBottom: "12px" }}>
              A free 50-SKU catalog audit is the fastest way to get a concrete picture of what we&apos;d fix and how we&apos;d work together.
            </div>
            <Link href="/audit" style={{ display: "block", background: "#2D6A4F", color: "#fff", padding: "10px 16px", borderRadius: "4px", fontSize: "12px", fontWeight: 500, textAlign: "center", textDecoration: "none" }}>
              Get free catalog audit
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
