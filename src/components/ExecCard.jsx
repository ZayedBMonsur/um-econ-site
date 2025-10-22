import React from "react";

export default function ExecCard({ exec, onClick }) {
    return (
        <div
            onClick={onClick}
            style={{
                background: "var(--color-cream)",
                border: "2px solid var(--color-brown-dark)",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                width: "100%",
                aspectRatio: "3 / 4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            }}
        >
            {/* Headshot */}
            <img
                src={exec.image}
                alt={exec.name}
                style={{
                    width: "100%",
                    height: "70%",
                    objectFit: "cover",
                    display: "block",
                    filter: "brightness(1.05)",
                }}
            />

            {/* Info */}
            <div
                style={{
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 247, 225, 0.9)",
                    backdropFilter: "blur(3px)",
                }}
            >
                <h3
                    style={{
                        margin: "0.25rem 0",
                        fontSize: "1.1rem",
                        color: "var(--color-brown-dark)",
                        fontWeight: 700,
                    }}
                >
                    {exec.name}
                </h3>
                <p
                    style={{
                        margin: 0,
                        color: "var(--color-brown)",
                        fontWeight: 500,
                        fontSize: "0.95rem",
                    }}
                >
                    {exec.role}
                </p>
            </div>
        </div>
    );
}
