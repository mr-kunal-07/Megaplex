"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { initializeContent, getContent } from "../../../lib/api";

export default function InitPage() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleInit = async () => {
        setLoading(true);
        setStatus("Initializing Firestore with default content...");
        try {
            await initializeContent();
            setStatus("✓ Firestore initialized successfully!");
            setSuccess(true);

            // Verify the content was saved
            const content = await getContent();
            if (content) {
                console.log("✓ Content verified in Firestore");
                setTimeout(() => {
                    router.push("/");
                }, 2000);
            }
        } catch (error) {
            setStatus(`❌ Error: ${error.message}`);
            console.error("Init error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #0f2018, #1a3828)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "DM Sans, sans-serif"
        }}>
            <div style={{
                background: "white",
                borderRadius: "16px",
                padding: "3rem",
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                textAlign: "center"
            }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏛</div>
                <h1 style={{ fontSize: "2rem", color: "#0f1a14", marginBottom: "0.5rem" }}>
                    Database Initialization
                </h1>
                <p style={{ color: "#6b7f73", marginBottom: "2rem", fontSize: "0.95rem" }}>
                    Initialize Firestore with Megaplex Prime content
                </p>

                {status && (
                    <div style={{
                        background: success ? "#e8f5f0" : "#fee",
                        color: success ? "#0f1a14" : "#c00",
                        padding: "1rem",
                        borderRadius: "8px",
                        marginBottom: "1.5rem",
                        fontSize: "0.9rem",
                        fontWeight: 500
                    }}>
                        {status}
                    </div>
                )}

                <button
                    onClick={handleInit}
                    disabled={loading || success}
                    style={{
                        width: "100%",
                        background: success ? "#2d8c6e" : "#2d8c6e",
                        color: "white",
                        border: "none",
                        padding: "0.85rem 2rem",
                        borderRadius: "6px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        cursor: loading || success ? "not-allowed" : "pointer",
                        opacity: loading || success ? 0.6 : 1,
                        transition: "all 0.2s",
                        fontFamily: "DM Sans, sans-serif"
                    }}
                >
                    {loading ? "Initializing..." : success ? "✓ Done! Redirecting..." : "Initialize Database"}
                </button>

                <p style={{ fontSize: "0.8rem", color: "#6b7f73", marginTop: "1.5rem", lineHeight: "1.6" }}>
                    This will create a Firestore document with all default content for Megaplex Prime.<br />
                    After initialization, the admin panel will be ready to use.
                </p>

                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #d4e8de" }}>
                    <p style={{ fontSize: "0.8rem", color: "#6b7f73", margin: "0.5rem 0" }}>
                        <strong>After initialization:</strong>
                    </p>
                    <ul style={{ fontSize: "0.8rem", color: "#6b7f73", textAlign: "left", display: "inline-block" }}>
                        <li>✓ Visit <code>/admin/login</code> to log in</li>
                        <li>✓ Use credentials: admin@gmail.com / 1234</li>
                        <li>✓ Edit any section content</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
