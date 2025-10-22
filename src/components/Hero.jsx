import React, { useState, useEffect, useMemo } from "react";

export default function Hero() {
    const slides = useMemo(
        () => [
            {
                id: "join",
                headline: "Join the Funk",
                sub: "Become part of our vibrant economics community.",
                cta: {
                    label: "Become a Member",
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSeAb4OzrZ8F_2aV7UwBANFCZbGpprVEQnsnZaglyXikKntnoQ/viewform",
                },
                background: "linear-gradient(135deg, var(--color-yellow), var(--color-accent))",
            },
            {
                id: "group",
                headline: "Meet the UM Econ Crew",
                sub: "Events, reports, debates — and occasionally memes.",
                cta: { label: "See Council", href: "/council" },
                image: "/group-photo.jpeg",
            },
            {
                id: "reports",
                headline: "Monthly Economic Reports",
                sub: "Student-written insights on markets & policy.",
                cta: { label: "Read Reports", href: "/reports" },
                image: "/report-photo.png",
            },
        ],
        []
    );

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setCurrent((i) => (i + 1) % slides.length), 4000);
        return () => clearInterval(t);
    }, [slides.length]);

    const activeSlide = slides[current];

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "var(--color-brown-dark)",
                overflow: "hidden",
            }}
        >
            {/* Backgrounds */}
            {slides.map((s, i) => {
                const isActive = i === current;
                return (
                    <div
                        key={s.id}
                        style={{
                            position: "absolute",
                            inset: 0,
                            transition: "opacity 700ms ease",
                            opacity: isActive ? 1 : 0,
                            backgroundImage: s.image ? `url('${s.image}')` : s.background,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: s.image ? "brightness(0.9)" : "none",
                            zIndex: 0,
                        }}
                    />
                );
            })}

            {/* Text content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "2rem 1rem",
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                <div
                    style={{
                        background: activeSlide.image
                            ? "rgba(255,255,255,0.85)"
                            : "transparent",
                        borderRadius: activeSlide.image ? "14px" : 0,
                        boxShadow: activeSlide.image ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
                        padding: activeSlide.image ? "1.5rem 2rem" : 0,
                        margin: "0 auto",
                        maxWidth: "90%",
                        transition: "background 0.3s ease",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "clamp(1.8rem, 5vw, 3rem)",
                            fontWeight: 800,
                            margin: 0,
                            color: "var(--color-brown-dark)",
                            lineHeight: 1.2,
                        }}
                    >
                        {activeSlide.headline}
                    </h1>
                    <p
                        style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                            margin: "1rem 0 2rem",
                            color: "var(--color-brown)",
                            lineHeight: 1.5,
                        }}
                    >
                        {activeSlide.sub}
                    </p>
                    <a
                        href={activeSlide.cta.href}
                        className="cta"
                        style={{
                            display: "inline-block",
                            textDecoration: "none",
                            background: "var(--color-brown-dark)",
                            color: "var(--color-cream)",
                            padding: "0.7rem 1.6rem",
                            borderRadius: "8px",
                            fontWeight: 600,
                            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                            transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = "var(--color-brown)")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = "var(--color-brown-dark)")
                        }
                    >
                        {activeSlide.cta.label} →
                    </a>
                </div>

                {/* Navigation dots */}
                <div
                    style={{
                        marginTop: "1.5rem",
                        display: "flex",
                        gap: ".5rem",
                        justifyContent: "center",
                    }}
                >
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                border: "none",
                                background:
                                    i === current
                                        ? "var(--color-brown-dark)"
                                        : "rgba(0,0,0,0.3)",
                                cursor: "pointer",
                                transition: "background 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
