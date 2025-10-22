import React from "react";

export default function ExecModal({ open, onClose, exec }) {
    if (!open || !exec) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 200,
                animation: "fadeIn 0.3s ease",
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "var(--color-cream)",
                    borderRadius: "16px",
                    maxWidth: "460px",
                    width: "90%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                    overflow: "hidden",
                    position: "relative",
                    transform: "scale(1)",
                    transition: "transform 0.3s ease",
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close"
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "14px",
                        background: "rgba(93,58,0,0.1)",
                        border: "none",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        fontSize: "1.25rem",
                        cursor: "pointer",
                        color: "var(--color-brown-dark)",
                        transition: "all 0.2s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "rgba(93,58,0,0.2)")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "rgba(93,58,0,0.1)")}
                >
                    ×
                </button>

                {/* Headshot */}
                <img
                    src={exec.image}
                    alt={exec.name}
                    style={{
                        width: "100%",
                        aspectRatio: "3 / 4",
                        objectFit: "cover",
                        display: "block",
                        borderBottom: "2px solid var(--color-brown-dark)",
                    }}
                />

                {/* Info */}
                <div style={{ padding: "1.25rem 1.5rem" }}>
                    <h2
                        style={{
                            margin: "0 0 0.25rem",
                            color: "var(--color-brown-dark)",
                            fontWeight: 800,
                        }}
                    >
                        {exec.name}
                    </h2>
                    <h4
                        style={{
                            margin: "0 0 1rem",
                            color: "var(--color-brown)",
                            fontWeight: 600,
                        }}
                    >
                        {exec.role}
                    </h4>

                    {/* Details */}
                    <p style={{ margin: "0.25rem 0" }}>
                        <strong>Likes:</strong> {exec.likes}
                    </p>
                    <p style={{ margin: "0.25rem 0" }}>
                        <strong>Dislikes:</strong> {exec.dislikes}
                    </p>
                    <p style={{ margin: "0.25rem 0" }}>
                        <strong>Why Econ:</strong> {exec.why}
                    </p>

                    <p
                        style={{
                            marginTop: "1rem",
                            fontStyle: "italic",
                            color: "var(--color-brown-dark)",
                        }}
                    >
                        “{exec.catchphrase}”
                    </p>

                    {/* Email */}
                    <a
                        href={`mailto:${exec.email}`}
                        style={{
                            display: "inline-block",
                            marginTop: "1.25rem",
                            background: "var(--color-brown-dark)",
                            color: "var(--color-cream)",
                            padding: "0.6rem 1.2rem",
                            borderRadius: "8px",
                            textDecoration: "none",
                            fontWeight: 600,
                            transition: "background 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = "var(--color-brown)")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = "var(--color-brown-dark)")
                        }
                    >
                        Email
                    </a>
                </div>
            </div>
        </div>
    );
}
