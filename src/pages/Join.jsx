import React from "react";

export default function Join() {
  return (
      <section id="join" className="section" style={{ backgroundColor: "var(--color-cream)" }} data-aos="fade-up">
        <h2 style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <i className="fa-solid fa-users" />
          Why Join?
        </h2>
        <p style={{ maxWidth: 800 }}>
          Whether you're a spreadsheet slayer, policy debater or just here for the free snacks,
          you'll find your people in UM Econ. Gain access to exclusive events, build your network
          and shape the conversation.
        </p>
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeAb4OzrZ8F_2aV7UwBANFCZbGpprVEQnsnZaglyXikKntnoQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ marginTop: "1.5rem" }}
        >
          Become a Member
        </a>
      </section>
  );
}
