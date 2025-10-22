import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    }, []);

    return (
        <main
            id="home"
            style={{
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                backgroundColor: "var(--color-cream)",
                color: "var(--color-brown-dark)",
                scrollBehavior: "smooth",
            }}
        >
            {/* Hero Element Only */}
            <section
                id="hero"
                data-aos="fade-up"
                style={{
                    position: "relative",
                    zIndex: 1,
                    scrollSnapAlign: "start",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <Hero />
            </section>
        </main>
    );
}
