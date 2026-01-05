import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

import logo from "../styles/Logo.png";
import bgHero from "../styles/bg.jpeg";
import bgWhy from "../styles/POSmachine.jpg";

export default function Landing() {
  const heroRef = useRef(null);
  const whyRef = useRef(null);

  const [showBrand, setShowBrand] = useState(false);
  const [showWhyBg, setShowWhyBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar logo AFTER hero
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowBrand(heroBottom <= 64);
      }

      // Fade background at "Why Choose Our System"
      if (whyRef.current) {
        const whyTop = whyRef.current.getBoundingClientRect().top;
        setShowWhyBg(whyTop <= window.innerHeight * 0.6);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-bg">
      {/* ===== BACKGROUND STACK ===== */}
      <div className="bg-stack">
        <div
          className={`bg-layer ${!showWhyBg ? "visible" : ""}`}
          style={{ backgroundImage: `url(${bgHero})` }}
        />
        <div
          className={`bg-layer ${showWhyBg ? "visible" : ""}`}
          style={{ backgroundImage: `url(${bgWhy})` }}
        />
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <div className="nav-left">
          {showBrand && (
            <div className="nav-brand">
              <img src={logo} alt="MarketMesh Logo" className="nav-logo" />
              <span className="nav-title">MarketMesh</span>
            </div>
          )}
        </div>

        <div className="nav-right">
          <Link to="/signup" className="nav-btn primary">
            Get Started
          </Link>
          <Link to="/Login" className="nav-btn">
            Sign In
          </Link>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero" ref={heroRef}>
        <img src={logo} alt="MarketMesh Logo" className="hero-logo" />
        <h1>MarketMesh</h1>
        <p className="hero-sub">Intelligent Retail Support Platform</p>
        <p className="text-muted">
          AI-enabled inventory management and retailer collaboration
        </p>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="impact-section">
        <h2>Why Inventory Systems Fail Today</h2>

        <div className="impact-grid">
          <div className="impact-card">
            <h3>30%</h3>
            <p>Retail inventory is either overstocked or understocked</p>
          </div>

          <div className="impact-card">
            <h3>$1.1T</h3>
            <p>Lost annually due to poor inventory decisions</p>
          </div>

          <div className="impact-card">
            <h3>40%</h3>
            <p>Retailers still rely on manual forecasting</p>
          </div>

          <div className="impact-card">
            <h3>25%</h3>
            <p>Potential waste reduction through smart redistribution</p>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="vision-panel" ref={whyRef}>
        <h2>Why Choose Our System</h2>
        <p className="value-sub">
          Our platform transforms inventory management from reactive tracking
          to intelligent, collaborative decision-making.
        </p>
      </section>

      {/* ===== FEATURE SHOWCASE ===== */}
      <section className="feature-showcase">
        <div className="feature-card feature-inventory">
          <div className="feature-content">
            <h3>Centralized Inventory Intelligence</h3>
            <p>
              Real-time stock visibility across retailers with AI-driven alerts
              and shortage predictions.
            </p>
          </div>
        </div>

        <div className="feature-card feature-trade">
          <div className="feature-content">
            <h3>Retailer-to-Retailer Trading</h3>
            <p>
              Convert surplus inventory into value by securely trading with
              nearby retailers.
            </p>
          </div>
        </div>

        <div className="feature-card feature-ai">
          <div className="feature-content">
            <h3>AI-Powered Decision Support</h3>
            <p>
              Demand forecasting, trend detection, and actionable insights —
              all in one dashboard.
            </p>
          </div>
        </div>

        <div className="feature-card feature-security">
          <div className="feature-content">
            <h3>Secure & Role-Based Access</h3>
            <p>
              Enterprise-grade authentication ensuring secure data sharing and
              controlled collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SYSTEM VISION =====
      <section className="vision-panel">
        <h2>System Vision</h2>
        <p>
          A scalable, AI-driven ecosystem that enables retailers to
          collaborate, predict demand, and reduce waste intelligently.
        </p>
      </section> */}
      <div className="feature-cta">
        <Link to="/signup" className="nav-btn primary">
            Get Started Today
        </Link>
      </div>
    {/* ===== FOOTER ===== */}
    <footer className="footer">
    <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MarketMesh. All rights reserved.</p>
        <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy Policy</Link>
        </div>
    </div>
    </footer>

    </div>
  );
}
