import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                width: "100%",
                backgroundColor: "var(--color-cream)",
                color: "var(--color-brown-dark)",
                padding: "2rem 1rem",
                textAlign: "center",
                borderTop: "2px solid rgba(93, 58, 0, 0.1)",
                boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
            }}
        >
            {/* Links */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.5rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                }}
            >
                {/* Email */}
                <a
                    href="mailto:econsoc@umanitoba.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                >
                    📧 Email
                </a>

                {/* Telegram */}
                <a
                    href="https://t.me/econsoc"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                >
                    💬 Telegram
                </a>

                {/* Instagram */}
                <a
                    href="https://instagram.com/umecon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                >
                    📷 Instagram
                </a>

                {/* Linktree */}
                <a
                    href="https://linktr.ee/umecon"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseOver={hoverOn}
                    onMouseOut={hoverOff}
                >
                    🌐 Linktree
                </a>
            </div>

            {/* Divider */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "1px",
                    background: "rgba(93, 58, 0, 0.15)",
                    margin: "0 auto 1rem auto",
                }}
            />

            {/* Copyright */}
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>
                © {year} University of Manitoba Economics Society — All Rights Reserved
            </p>
        </footer>
    );
}

/* -------------- Shared Styles --------------- */

const linkStyle = {
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    background: "var(--color-brown-dark)",
    color: "var(--color-cream)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    border: "2px solid var(--color-brown-dark)",
    transition: "all 0.25s ease",
};

function hoverOn(e) {
    e.target.style.background = "var(--color-yellow)";
    e.target.style.color = "var(--color-brown-dark)";
    e.target.style.border = "2px solid var(--color-yellow-dark)";
}

function hoverOff(e) {
    e.target.style.background = "var(--color-brown-dark)";
    e.target.style.color = "var(--color-cream)";
    e.target.style.border = "2px solid var(--color-brown-dark)";
}
