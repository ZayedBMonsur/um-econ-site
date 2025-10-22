import React, { useState, useEffect } from "react";
import { execs } from "../data/execs";
import ExecCard from "../components/ExecCard";
import ExecModal from "../components/ExecModal";
import AOS from "aos";

export default function Council() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeExec, setActiveExec] = useState(null);
    const [year, setYear] = useState(2025);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    // Extract unique years from dataset (auto-updates if you add more)
    const availableYears = [...new Set(execs.map((e) => e.year))].sort().reverse();
    const filteredExecs = execs.filter((e) => e.year === year);

    return (
        <section
            id="council"
            className="section"
            style={{ backgroundColor: "var(--color-cream)", paddingBottom: "4rem" }}
            data-aos="fade-up"
        >
            {/* Title */}
            <h2
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    marginBottom: "1rem",
                    color: "var(--color-brown-dark)",
                }}
            >
                <i className="fa-solid fa-users-gear" />
                Executive Council — <span style={{ fontWeight: 600 }}>{year}</span>
            </h2>

            {/* Year Selector */}
            <div
                style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                    flexWrap: "wrap",
                }}
            >
                {availableYears.map((y) => (
                    <button
                        key={y}
                        onClick={() => setYear(y)}
                        style={{
                            border: "2px solid var(--color-brown-dark)",
                            background: y === year
                                ? "var(--color-brown-dark)"
                                : "var(--color-cream)",
                            color: y === year ? "var(--color-cream)" : "var(--color-brown-dark)",
                            borderRadius: "8px",
                            padding: "0.4rem 1rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                            if (y !== year) {
                                e.currentTarget.style.background = "var(--color-yellow)";
                                e.currentTarget.style.color = "var(--color-brown-dark)";
                            }
                        }}
                        onMouseOut={(e) => {
                            if (y !== year) {
                                e.currentTarget.style.background = "var(--color-cream)";
                                e.currentTarget.style.color = "var(--color-brown-dark)";
                            }
                        }}
                    >
                        {y}
                    </button>
                ))}
            </div>

            {/* Exec Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.5rem",
                }}
            >
                {filteredExecs.map((exec, i) => (
                    <div key={exec.name} data-aos="fade-up" data-aos-delay={i * 80}>
                        <ExecCard
                            exec={exec}
                            onClick={() => {
                                setActiveExec(exec);
                                setModalOpen(true);
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            <ExecModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                exec={activeExec}
            />
        </section>
    );
}
