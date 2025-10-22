import React from "react";

export default function About() {
    return (
        <section id="about" className="section" data-aos="fade-up">
            <h2 style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                <i className="fa-solid fa-lightbulb" />
                What We Do
            </h2>
            <p>
                From panel discussions to meme night with the Fed, we keep econ fun, weird, and wildly relevant.
                We host workshops, publish the monthly economics report, and build a community where everyone can learn.
            </p>
        </section>
    );
}
