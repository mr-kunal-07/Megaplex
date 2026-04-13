"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getContent, updateSection } from "../../lib/api";

// ── Field helpers ─────────────────────────────────────────────────────────────
function Field({ label, value, onChange, multiline }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      {multiline
        ? <textarea rows={4} value={value || ""} onChange={(e) => onChange(e.target.value)} />
        : <input type="text" value={value || ""} onChange={(e) => onChange(e.target.value)} />
      }
    </div>
  );
}

function SaveBar({ onSave, saving, saved }) {
  return (
    <div className="save-bar">
      <button className="btn-primary" onClick={onSave} disabled={saving}>
        {saving ? "Saving..." : "💾 Save Changes"}
      </button>
      {saved && <span className="save-success">✓ Saved successfully!</span>}
    </div>
  );
}

// ── Section Editors ───────────────────────────────────────────────────────────
function HeroEditor({ data, onSave }) {
  const [d, setD] = useState(data);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const set = (k) => (v) => setD((p) => ({ ...p, [k]: v }));
  const save = async () => { setSaving(true); setSaved(false); await onSave("hero", d); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };
  return (
    <div className="admin-card">
      <h2>🏠 Hero Section</h2>
      <Field label="Badge Text" value={d.badge} onChange={set("badge")} />
      <Field label="Tagline" value={d.tagline} onChange={set("tagline")} />
      <Field label="Title" value={d.title} onChange={set("title")} />
      <Field label="Subtitle (use | to separate 1BHK and 2BHK)" value={d.subtitle} onChange={set("subtitle")} />
      <Field label="Address" value={d.address} onChange={set("address")} />
      <Field label="CTA Button Text" value={d.ctaText} onChange={set("ctaText")} />
      <SaveBar onSave={save} saving={saving} saved={saved} />
    </div>
  );
}

function OverviewEditor({ data, onSave }) {
  const [d, setD] = useState(data);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const set = (k) => (v) => setD((p) => ({ ...p, [k]: v }));
  const save = async () => { setSaving(true); setSaved(false); await onSave("overview", d); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };
  return (
    <div className="admin-card">
      <h2>📋 Project Overview</h2>
      <Field label="Heading" value={d.heading} onChange={set("heading")} />
      <Field label="Body Text" value={d.body} onChange={set("body")} multiline />
      <Field label="CTA Button Text" value={d.ctaText} onChange={set("ctaText")} />
      <SaveBar onSave={save} saving={saving} saved={saved} />
    </div>
  );
}

function ConnectivityEditor({ data, onSave }) {
  const [d, setD] = useState(data);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const updateItem = (i, k, v) => { const items = [...d.items]; items[i] = { ...items[i], [k]: v }; setD((p) => ({ ...p, items })); };
  const save = async () => { setSaving(true); setSaved(false); await onSave("connectivity", d); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };
  return (
    <div className="admin-card">
      <h2>📍 Nearby Connectivity</h2>
      <Field label="Heading" value={d.heading} onChange={(v) => setD((p) => ({ ...p, heading: v }))} />
      <Field label="Subheading" value={d.subheading} onChange={(v) => setD((p) => ({ ...p, subheading: v }))} />
      <div style={{ marginTop: "1.5rem" }}>
        <label style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Items</label>
        {(d.items || []).map((item, i) => (
          <div key={i} className="array-item">
            <div className="array-item-header">Item {i + 1}</div>
            <Field label="Icon (emoji)" value={item.icon} onChange={(v) => updateItem(i, "icon", v)} />
            <Field label="Label" value={item.label} onChange={(v) => updateItem(i, "label", v)} />
            <Field label="Distance" value={item.value} onChange={(v) => updateItem(i, "value", v)} />
          </div>
        ))}
      </div>
      <SaveBar onSave={save} saving={saving} saved={saved} />
    </div>
  );
}

function AmenitiesEditor({ data, onSave }) {
  const [d, setD] = useState(data);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const updateItem = (i, k, v) => { const items = [...d.items]; items[i] = { ...items[i], [k]: v }; setD((p) => ({ ...p, items })); };
  const save = async () => { setSaving(true); setSaved(false); await onSave("amenities", d); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };
  return (
    <div className="admin-card">
      <h2>🏋️ Amenities</h2>
      <Field label="Heading" value={d.heading} onChange={(v) => setD((p) => ({ ...p, heading: v }))} />
      <Field label="Subheading" value={d.subheading} onChange={(v) => setD((p) => ({ ...p, subheading: v }))} multiline />
      <Field label="CTA Text" value={d.ctaText} onChange={(v) => setD((p) => ({ ...p, ctaText: v }))} />
      {(d.items || []).map((item, i) => (
        <div key={i} className="array-item">
          <div className="array-item-header">Amenity {i + 1}</div>
          <Field label="Icon" value={item.icon} onChange={(v) => updateItem(i, "icon", v)} />
          <Field label="Title" value={item.title} onChange={(v) => updateItem(i, "title", v)} />
          <Field label="Description" value={item.desc} onChange={(v) => updateItem(i, "desc", v)} />
        </div>
      ))}
      <SaveBar onSave={save} saving={saving} saved={saved} />
    </div>
  );
}

function AboutEditor({ data, onSave }) {
  const [d, setD] = useState(data);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const updateStat = (i, k, v) => { const stats = [...d.stats]; stats[i] = { ...stats[i], [k]: v }; setD((p) => ({ ...p, stats })); };
  const save = async () => { setSaving(true); setSaved(false); await onSave("aboutUs", d); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };
  return (
    <div className="admin-card">
      <h2>🏢 About Developer</h2>
      <Field label="Heading" value={d.heading} onChange={(v) => setD((p) => ({ ...p, heading: v }))} />
      <Field label="Body Text" value={d.body} onChange={(v) => setD((p) => ({ ...p, body: v }))} multiline />
      {(d.stats || []).map((stat, i) => (
        <div key={i} className="array-item">
          <div className="array-item-header">Stat {i + 1}</div>
          <Field label="Value" value={stat.value} onChange={(v) => updateStat(i, "value", v)} />
          <Field label="Label" value={stat.label} onChange={(v) => updateStat(i, "label", v)} />
        </div>
      ))}
      <SaveBar onSave={save} saving={saving} saved={saved} />
    </div>
  );
}

function ConstructionEditor({ data, onSave }) {
  const [d, setD] = useState(data);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const updateItem = (i, k, v) => { const items = [...d.items]; items[i] = { ...items[i], [k]: v }; setD((p) => ({ ...p, items })); };
  const save = async () => { setSaving(true); setSaved(false); await onSave("construction", d); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };
  return (
    <div className="admin-card">
      <h2>🏗️ Construction Updates</h2>
      <Field label="Heading" value={d.heading} onChange={(v) => setD((p) => ({ ...p, heading: v }))} />
      {(d.items || []).map((item, i) => (
        <div key={i} className="array-item">
          <div className="array-item-header">Update {i + 1}</div>
          <Field label="Label" value={item.label} onChange={(v) => updateItem(i, "label", v)} />
          <Field label="Date" value={item.date} onChange={(v) => updateItem(i, "date", v)} />
        </div>
      ))}
      <SaveBar onSave={save} saving={saving} saved={saved} />
    </div>
  );
}

function FAQEditor({ data, onSave }) {
  const [d, setD] = useState(data);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const updateItem = (i, k, v) => { const items = [...d.items]; items[i] = { ...items[i], [k]: v }; setD((p) => ({ ...p, items })); };
  const addItem = () => setD((p) => ({ ...p, items: [...p.items, { q: "New Question", a: "Answer here" }] }));
  const removeItem = (i) => setD((p) => ({ ...p, items: p.items.filter((_, idx) => idx !== i) }));
  const save = async () => { setSaving(true); setSaved(false); await onSave("faq", d); setSaving(false); setSaved(true); setTimeout(() => setSaved(false), 3000); };
  return (
    <div className="admin-card">
      <h2>❓ FAQ</h2>
      <Field label="Heading" value={d.heading} onChange={(v) => setD((p) => ({ ...p, heading: v }))} />
      {(d.items || []).map((item, i) => (
        <div key={i} className="array-item">
          <div className="array-item-header" style={{ display: "flex", justifyContent: "space-between" }}>
            <span>FAQ {i + 1}</span>
            <button onClick={() => removeItem(i)} style={{ background: "#fee", border: "none", borderRadius: "4px", padding: "2px 8px", cursor: "pointer", color: "#c00", fontSize: "0.75rem" }}>Remove</button>
          </div>
          <Field label="Question" value={item.q} onChange={(v) => updateItem(i, "q", v)} />
          <Field label="Answer" value={item.a} onChange={(v) => updateItem(i, "a", v)} multiline />
        </div>
      ))}
      <button onClick={addItem} className="btn-outline" style={{ marginTop: "0.5rem" }}>+ Add FAQ</button>
      <SaveBar onSave={save} saving={saving} saved={saved} />
    </div>
  );
}

// ── Admin Panel ───────────────────────────────────────────────────────────────
const SECTIONS = [
  { key: "hero", label: "🏠 Hero Section" },
  { key: "overview", label: "📋 Project Overview" },
  { key: "connectivity", label: "📍 Nearby Connectivity" },
  { key: "amenities", label: "🏋️ Amenities" },
  { key: "aboutUs", label: "🏢 About Developer" },
  { key: "construction", label: "🏗️ Construction Updates" },
  { key: "faq", label: "❓ FAQ" },
];

export default function AdminPage() {
  const [content, setContent] = useState(null);
  const [active, setActive] = useState("hero");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) { router.push("/admin/login"); return; }
    getContent().then(setContent).finally(() => setLoading(false));
  }, [router]);

  const handleSave = useCallback(async (section, data) => {
    await updateSection(section, data);
    const updated = await getContent();
    setContent(updated);
  }, []);

  const logout = () => { localStorage.removeItem("admin_token"); router.push("/admin/login"); };

  if (loading) return <div style={{ padding: "2rem", fontFamily: "DM Sans, sans-serif" }}>Loading admin panel...</div>;
  if (!content) return (
    <div style={{ padding: "2rem", fontFamily: "DM Sans, sans-serif", minHeight: "100vh", background: "var(--off-white)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "white", borderRadius: "12px", padding: "3rem", maxWidth: "500px", textAlign: "center", boxShadow: "0 4px 24px rgba(45,140,110,0.12)" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📭</div>
        <h2 style={{ color: "var(--dark)", marginBottom: "1rem" }}>No Content Found</h2>
        <p style={{ color: "var(--muted)", marginBottom: "2rem", lineHeight: "1.6" }}>
          The Firestore database appears to be empty. You need to initialize it with default content first.
        </p>
        <a href="/admin/init" style={{ display: "inline-block", background: "var(--green)", color: "white", padding: "0.75rem 2rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600, transition: "background 0.2s" }} onMouseEnter={(e) => e.target.style.background = "var(--green-light)"} onMouseLeave={(e) => e.target.style.background = "var(--green)"}>
          Initialize Database →
        </a>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "2rem" }}>
          After initialization, refresh this page to start editing.
        </p>
      </div>
    </div>
  );

  const renderEditor = () => {
    switch (active) {
      case "hero": return <HeroEditor data={content.hero} onSave={handleSave} />;
      case "overview": return <OverviewEditor data={content.overview} onSave={handleSave} />;
      case "connectivity": return <ConnectivityEditor data={content.connectivity} onSave={handleSave} />;
      case "amenities": return <AmenitiesEditor data={content.amenities} onSave={handleSave} />;
      case "aboutUs": return <AboutEditor data={content.aboutUs} onSave={handleSave} />;
      case "construction": return <ConstructionEditor data={content.construction} onSave={handleSave} />;
      case "faq": return <FAQEditor data={content.faq} onSave={handleSave} />;
      default: return null;
    }
  };

  return (
    <div className="admin-layout">
      <div className="admin-navbar">
        <h1>🏛 Megaplex Prime — Admin Panel</h1>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="/" target="_blank" rel="noreferrer" className="btn-outline" style={{ color: "#7ed4b8", borderColor: "#7ed4b8", fontSize: "0.85rem", padding: "0.4rem 1rem" }}>
            View Site ↗
          </a>
          <button onClick={logout} style={{ background: "none", border: "1px solid #7ed4b8", color: "#7ed4b8", padding: "0.4rem 1rem", borderRadius: "6px", cursor: "pointer", fontSize: "0.85rem" }}>
            Logout
          </button>
        </div>
      </div>
      <div className="admin-body">
        <aside className="admin-sidebar">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.key}>
                <button className={active === s.key ? "active" : ""} onClick={() => setActive(s.key)}>
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <main className="admin-main">{renderEditor()}</main>
      </div>
    </div>
  );
}
