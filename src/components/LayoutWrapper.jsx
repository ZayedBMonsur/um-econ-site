import React from "react";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }) {
    return (
        <div style={{ minHeight: "100dvh", background: "var(--color-page)" }}>
            <Navbar />
            <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
                {children}
            </main>
            <footer
                style={{
                    marginTop: "4rem",
                    padding: "2rem 1rem",
                    textAlign: "center",
                    color: "var(--color-brown-dark)",
                }}
            >
                <small>© {new Date().getFullYear()} UM Econ Society</small>
            </footer>
        </div>
    );
}
