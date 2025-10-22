import React from "react";
import { events } from "../data/events";

export default function Events() {
    const today = new Date();

    const upcoming = events.filter((e) => new Date(e.date) >= today);
    const past = events
        .filter((e) => new Date(e.date) < today)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const renderEventCard = (e) => (
        <div
            key={e.id}
            style={{
                background: "var(--color-surface, rgba(255,255,255,0.85))",
                borderRadius: "12px",
                boxShadow: "var(--shadow-md)",
                overflow: "hidden",
                transition: "transform 0.2s ease",
            }}
            data-aos="fade-up"
        >
            {e.image && (
                <img
                    src={e.image}
                    alt={e.title}
                    style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        borderBottom: "3px solid var(--color-yellow)",
                    }}
                />
            )}
            <div style={{ padding: "1.25rem 1.5rem" }}>
                <h3 style={{ marginBottom: ".25rem", color: "var(--color-brown-dark)" }}>
                    {e.title}
                </h3>
                <p style={{ margin: "0.25rem 0", fontWeight: 500 }}>
                     {new Date(e.date).toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}
                </p>
                <p style={{ margin: "0.25rem 0", fontWeight: 500 }}>
                     {e.location}
                </p>
                <p style={{ opacity: 0.9, lineHeight: 1.6, marginTop: ".5rem" }}>
                    {e.description}
                </p>
                {e.rsvp && (
                    <a
                        href={e.rsvp}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            marginTop: "1rem",
                            background: "var(--color-brown-dark)",
                            color: "var(--color-cream)",
                            padding: "0.5rem 1.2rem",
                            borderRadius: "8px",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "background 0.3s ease",
                        }}
                        onMouseOver={(el) =>
                            (el.currentTarget.style.background = "var(--color-brown)")
                        }
                        onMouseOut={(el) =>
                            (el.currentTarget.style.background = "var(--color-brown-dark)")
                        }
                    >
                        RSVP
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <section
            id="events"
            style={{
                width: "100%",
                backgroundColor: "var(--color-cream)",
                color: "var(--color-brown-dark)",
                padding: "4rem 2rem",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <h2
                    style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        borderBottom: "3px solid var(--color-brown-dark)",
                        paddingBottom: "0.5rem",
                        marginBottom: "2rem",
                    }}
                >
                    Upcoming Events
                </h2>
                {upcoming.length ? (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {upcoming.map(renderEventCard)}
                    </div>
                ) : (
                    <p>No upcoming events right now — check back soon!</p>
                )}

                <h2
                    style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        borderBottom: "3px solid var(--color-brown-dark)",
                        paddingBottom: "0.5rem",
                        margin: "3rem 0 2rem",
                    }}
                >
                    Past Events
                </h2>
                {past.length ? (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: "2rem",
                        }}
                    >
                        {past.map(renderEventCard)}
                    </div>
                ) : (
                    <p>No past events yet!</p>
                )}
            </div>
        </section>
    );
}
