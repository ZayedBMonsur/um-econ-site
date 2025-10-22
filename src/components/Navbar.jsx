import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // main nav items
    const navItems = [
        { label: "About", path: "/about" },
        { label: "Events", path: "/events" },
        { label: "Council", path: "/council" },
        { label: "Reports", path: "/reports" },
        { label: "Resources", path: "/resources" },
        { label: "Constitution", path: "/constitution" },
    ];

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                width: "100%",
                backgroundColor: isScrolled
                    ? "var(--color-yellow)"
                    : "rgba(255,255,255,0.6)",
                backdropFilter: isScrolled ? "none" : "blur(10px)",
                boxShadow: isScrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                transition: "all 0.3s ease",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.9rem 1.8rem",
                }}
            >
                {/* ---------- Left: Logo ---------- */}
                <Link
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        textDecoration: "none",
                        color: "var(--color-brown-dark)",
                        fontWeight: 800,
                        fontSize: "1.2rem",
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="UM Econ"
                        style={{
                            width: "42px",
                            height: "42px",
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                    <span>UM ECON SOCIETY</span>
                </Link>

                {/* ---------- Right: Navigation Links ---------- */}
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                    }}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            style={{
                                color:
                                    location.pathname === item.path
                                        ? "var(--color-brown-dark)"
                                        : "rgba(0,0,0,0.7)",
                                fontWeight: 600,
                                fontSize: "1rem",
                                textDecoration: "none",
                                position: "relative",
                                transition: "color 0.25s ease",
                            }}
                            onMouseOver={(e) =>
                                (e.currentTarget.style.color = "var(--color-brown-dark)")
                            }
                            onMouseOut={(e) => {
                                if (location.pathname !== item.path)
                                    e.currentTarget.style.color = "rgba(0,0,0,0.7)";
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}

                    {/* ---------- Join Button (external) ---------- */}
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeAb4OzrZ8F_2aV7UwBANFCZbGpprVEQnsnZaglyXikKntnoQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            background: "var(--color-brown-dark)",
                            color: "var(--color-cream)",
                            padding: "0.55rem 1.25rem",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "1rem",
                            transition: "all 0.3s ease",
                            border: "2px solid var(--color-brown-dark)",
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = "var(--color-yellow)";
                            e.currentTarget.style.color = "var(--color-brown-dark)";
                            e.currentTarget.style.border = "2px solid var(--color-yellow-dark)";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = "var(--color-brown-dark)";
                            e.currentTarget.style.color = "var(--color-cream)";
                            e.currentTarget.style.border = "2px solid var(--color-brown-dark)";
                        }}
                    >
                        Join
                    </a>
                </nav>
            </div>
        </header>
    );
}
