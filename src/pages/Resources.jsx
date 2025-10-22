import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { umResources } from "../data/resources";

export default function Resources() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    return (
        <section
            id="resources"
            style={{
                backgroundColor: "var(--color-cream)",
                color: "var(--color-brown-dark)",
                padding: "4rem 1rem",
                minHeight: "100vh",
            }}
            data-aos="fade-up"
        >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <h1
                    style={{
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        marginBottom: "2rem",
                        textAlign: "center",
                    }}
                >
                    U of M Resources for Economics Students
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        maxWidth: "700px",
                        margin: "0 auto 2rem",
                        fontSize: "1.1rem",
                        opacity: 0.9,
                    }}
                >
                    A curated collection of official University of Manitoba resources to
                    help you succeed in the Economics program — from course planning to
                    career development.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {umResources.map((r, i) => (
                        <div
                            key={r.title}
                            data-aos="fade-up"
                            data-aos-delay={i * 50}
                            style={{
                                background: "rgba(255,255,255,0.9)",
                                borderRadius: "12px",
                                border: "1px solid rgba(0,0,0,0.08)",
                                padding: "1.25rem",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                            }}
                        >
                            <h3
                                style={{
                                    fontWeight: 700,
                                    margin: "0 0 0.5rem",
                                    color: "var(--color-brown-dark)",
                                }}
                            >
                                {r.title}
                            </h3>
                            <p
                                style={{
                                    margin: "0 0 0.75rem",
                                    fontSize: "0.95rem",
                                    opacity: 0.85,
                                }}
                            >
                                {r.description}
                            </p>
                            <a
                                href={r.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none",
                                    background: "var(--color-brown-dark)",
                                    color: "var(--color-cream)",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "8px",
                                    fontWeight: 600,
                                    transition: "background 0.3s ease",
                                    display: "inline-block",
                                }}
                                onMouseOver={(e) =>
                                    (e.target.style.background = "var(--color-brown)")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.background = "var(--color-brown-dark)")
                                }
                            >
                                Visit Site
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
