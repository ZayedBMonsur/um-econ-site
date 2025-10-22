import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Events from "./pages/Events";
import Council from "./pages/Council";
import Constitution from "./pages/Constitution";
import Report from "./pages/Report";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <div style={{ backgroundColor: "var(--color-cream)", color: "var(--color-brown-dark)" }}>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/join" element={<Join />} />
                <Route path="/events" element={<Events />} />
                <Route path="/council" element={<Council />} />
                <Route path="/constitution" element={<Constitution />} />
                <Route path="/reports" element={<Report />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
}
