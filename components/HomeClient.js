"use client";
import { useState } from "react";

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ hero }) {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">🏛 Megaplex Prime</a>
      <ul className="navbar-links">
        {["Home","Overview","Connectivity","Amenities","Floor Plans","Developer","Contact"].map((l) => (
          <li key={l}><a href={`#${l.toLowerCase().replace(" ", "-")}`}>{l}</a></li>
        ))}
      </ul>
      <a href="#overview" className="btn-primary">{hero?.ctaText || "Enquiry Now"}</a>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection({ data }) {
  if (!data) return null;
  const parts = (data.subtitle || "").split("|");
  const smart = parts[0]?.split("starting")[1]?.trim() || "₹ 69.99 Lacs*";
  const premium = parts[1]?.split("starting")[1]?.trim() || "₹ 96.99 Lacs*";
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div>
          <div className="hero-badge">{data.badge}</div>
          <p className="hero-tagline">{data.tagline}</p>
          <h1 className="hero-title">
            {data.title?.split(" ").slice(0, -1).join(" ")}{" "}
            <span>{data.title?.split(" ").slice(-1)}</span>
          </h1>
          <div className="hero-price-grid">
            <div className="hero-price-card">
              <div className="hero-price-type">Smart 1 BHK</div>
              <div className="hero-price-value">{smart}</div>
              <div style={{ fontSize: "0.75rem", color: "#afc9bc", marginTop: "0.2rem" }}>onwards</div>
            </div>
            <div className="hero-price-card">
              <div className="hero-price-type">Premium 2 BHK</div>
              <div className="hero-price-value">{premium}</div>
              <div style={{ fontSize: "0.75rem", color: "#afc9bc", marginTop: "0.2rem" }}>onwards</div>
            </div>
          </div>
          <p className="hero-address">📍 {data.address}</p>
          <a href="#overview" className="btn-primary" style={{ marginTop: "1.5rem" }}>{data.ctaText}</a>
        </div>
        <div className="hero-right">
          <div className="hero-logo-box">
            <div className="brand-name">Presented by</div>
            <div className="hero-logo-emblem">🏛</div>
            <div className="brand-name" style={{ letterSpacing: "0.1em", marginBottom: "0.3rem" }}>MEGAPLEX PRIME</div>
            <div className="hero-logo-main">INFINITY</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Overview ──────────────────────────────────────────────────────────────────
function OverviewSection({ data }) {
  if (!data) return null;
  const imgs = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
  ];
  return (
    <section id="overview" className="overview">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-images">
            {imgs.map((src, i) => (
              <div key={i} className="overview-img">
                <img src={src} alt={`project-${i}`} />
              </div>
            ))}
          </div>
          <div className="overview-content">
            <h2>{data.heading}</h2>
            <p>{data.body}</p>
            <a href="#contact" className="btn-primary">{data.ctaText}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Connectivity ──────────────────────────────────────────────────────────────
function ConnectivitySection({ data }) {
  if (!data) return null;
  return (
    <section id="connectivity" className="connectivity">
      <div className="container">
        <h2 className="section-heading">{data.heading}</h2>
        <p className="section-sub">{data.subheading}</p>
        <div className="connectivity-grid">
          {(data.items || []).map((item, i) => (
            <div key={i} className="connectivity-card">
              <div className="icon">{item.icon}</div>
              <div className="label">{item.label}</div>
              <div className="value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Amenities ─────────────────────────────────────────────────────────────────
function AmenitiesSection({ data }) {
  if (!data) return null;
  return (
    <section id="amenities" className="amenities">
      <div className="container">
        <h2 className="section-heading">{data.heading}</h2>
        <p className="section-sub">{data.subheading}</p>
        <div className="amenities-grid">
          {(data.items || []).map((item, i) => (
            <div key={i} className="amenity-card">
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="amenities-cta">
          <button className="btn-primary">{data.ctaText}</button>
        </div>
      </div>
    </section>
  );
}

// ── Floor Plans ───────────────────────────────────────────────────────────────
function FloorPlansSection() {
  const [active, setActive] = useState("1BHK");
  const plans = {
    "1BHK": { area: "380-417 SQ.FT", price: "Click for price", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" },
    "2BHK": { area: "620-680 SQ.FT", price: "Click for price", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80" },
    "3BHK": { area: "880-950 SQ.FT", price: "Click for price", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80" },
  };
  const plan = plans[active];
  return (
    <section id="floor-plans" className="floor-plans">
      <div className="container">
        <h2 className="section-heading">Floor Plans</h2>
        <p className="section-sub">Choose the perfect configuration for your lifestyle</p>
        <div className="floor-tabs" style={{ marginTop: "2rem" }}>
          {Object.keys(plans).map((k) => (
            <button key={k} className={`floor-tab ${active === k ? "active" : ""}`} onClick={() => setActive(k)}>{k}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ borderRadius: "12px", overflow: "hidden", height: "300px" }}>
            <img src={plan.img} alt={active} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Type</div>
            <div style={{ fontSize: "1.5rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, marginBottom: "0.5rem" }}>{active}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "0.25rem" }}>Area: {plan.area}</div>
            <div style={{ fontSize: "0.8rem", color: "var(--muted)", marginBottom: "1.5rem" }}>Price: {plan.price}</div>
            <a href="#contact" className="btn-primary">Download Floor Plan</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Video Banner ──────────────────────────────────────────────────────────────
function VideoSection() {
  return (
    <section style={{ padding: 0, position: "relative", height: "400px", overflow: "hidden" }}>
      <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80" alt="city" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", background: "rgba(255,255,255,0.2)", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "1.5rem", color: "white" }}>▶</div>
      </div>
    </section>
  );
}

// ── About Developer ───────────────────────────────────────────────────────────
function AboutSection({ data }) {
  if (!data) return null;
  return (
    <section id="developer" className="about-dev">
      <div className="container">
        <div className="about-dev-inner">
          <div>
            <h2 className="section-heading" style={{ textAlign: "left" }}>{data.heading}</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: "1.25rem 0", fontSize: "0.95rem" }}>{data.body}</p>
            <div className="about-stats">
              {(data.stats || []).map((s, i) => (
                <div key={i} className="stat-box">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80" alt="developer" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Construction ──────────────────────────────────────────────────────────────
function ConstructionSection({ data }) {
  if (!data) return null;
  const imgs = [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
    "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80",
    "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=400&q=80",
  ];
  return (
    <section id="construction" className="construction">
      <div className="container">
        <h2 className="section-heading">{data.heading}</h2>
        <div className="construction-grid">
          {(data.items || []).map((item, i) => (
            <div key={i} className="construction-card">
              <img src={imgs[i % imgs.length]} alt={item.label} />
              <div className="construction-overlay">
                <div className="label">{item.label}</div>
                <div className="date">{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQSection({ data }) {
  const [open, setOpen] = useState(null);
  if (!data) return null;
  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-heading">{data.heading}</h2>
        <div className="faq-list">
          {(data.items || []).map((item, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className="icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Megaplex Prime Infinity. All rights reserved.</p>
      <p style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>*T&C Apply. Prices are indicative. RERA Registration in process.</p>
    </footer>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function HomeClient({ content }) {
  const c = content || {};
  if (!content) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #0f2018, #1a3828)" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏛</div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}>Loading Megaplex Prime...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar hero={c.hero} />
      <HeroSection data={c.hero} />
      <OverviewSection data={c.overview} />
      <ConnectivitySection data={c.connectivity} />
      <AmenitiesSection data={c.amenities} />
      <FloorPlansSection />
      <VideoSection />
      <AboutSection data={c.aboutUs} />
      <ConstructionSection data={c.construction} />
      <FAQSection data={c.faq} />
      <Footer />
    </>
  );
}
