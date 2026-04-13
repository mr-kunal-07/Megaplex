"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "../../../lib/api";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const res = await loginAdmin(email, password);
      if (res.success) {
        localStorage.setItem("admin_token", res.token);
        router.push("/admin");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🏛</div>
        <h1>Admin Panel</h1>
        <p>Megaplex Prime Infinity — Content Manager</p>
        {error && <div className="login-error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@gmail.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••" required />
          </div>
          <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: "1.5rem", textAlign: "center" }}>
          Hint: admin@gmail.com / 1234
        </p>
        <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
            First time setup?
          </p>
          <a href="/admin/init" style={{ fontSize: "0.8rem", color: "var(--green)", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "var(--green-light)"} onMouseLeave={(e) => e.target.style.color = "var(--green)"}>
            Initialize Database →
          </a>
        </div>
      </div>
    </div>
  );
}
