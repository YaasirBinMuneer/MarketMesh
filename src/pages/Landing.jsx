import logo from "./Logo.png";

export default function Landing() {
  return (
    <div className="landing-bg">

      {/* Hero */}
        <section className="hero">
        <img src={logo} />


        <h1>MarketMesh</h1>
        <p className="hero-sub">Intelligent Retail Support Platform</p>
        <p className="text-muted">
            AI-enabled inventory management and retailer collaboration
        </p>
        </section>


      {/* Problem */}
      <section className="problemcard">
        <h2>Problem Statement</h2>
        <p>
          Retailers often struggle with inventory inefficiencies, lack of
          predictive insights, and limited collaboration tools. Oscorps
          addresses these challenges through a centralized and intelligent
          digital platform.
        </p>
      </section>

        {/* Objectives to Features Traceability */}
<section className="traceability-panel">
  <h2>How Our Objectives Are Achieved</h2>

  <div className="trace-grid">
    <div className="trace-card">
      <h3>Centralized Inventory Management</h3>
      <p className="trace-desc">
        Provide retailers with a unified platform to monitor stock levels,
        shortages, and surplus items.
      </p>
      <ul>
        <li>Inventory Tracking & Alerts</li>
        <li>AI-Powered Inventory Insights</li>
      </ul>
    </div>

    <div className="trace-card">
      <h3>Retailer-to-Retailer Trade Coordination</h3>
      <p className="trace-desc">
        Enable collaboration between retailers to trade surplus goods and
        reduce wastage.
      </p>
      <ul>
        <li>Retail Trade Hub</li>
        <li>Role-Based Authentication</li>
      </ul>
    </div>

    <div className="trace-card">
      <h3>AI-Driven Decision Support</h3>
      <p className="trace-desc">
        Assist retailers with intelligent insights instead of manual analysis.
      </p>
      <ul>
        <li>AI-Powered Analytics</li>
        <li>Demand Forecast Indicators</li>
      </ul>
    </div>

    <div className="trace-card">
      <h3>Secure & Scalable Infrastructure</h3>
      <p className="trace-desc">
        Ensure the platform is secure, extensible, and future-ready.
      </p>
      <ul>
        <li>Role-Based Access Control</li>
        <li>Modular Web Architecture</li>
        <li>Cloud-Ready Backend Services</li>
      </ul>
    </div>
  </div>
</section>


      {/* System Vision */}
      <section className="vision-panel">
        <h2>System Vision</h2>
        <p>
          Oscorps is designed with scalability and extensibility in mind,
          enabling seamless integration of AI modules and backend services
          as the platform evolves.
        </p>
      </section>

    </div>
  );
}
