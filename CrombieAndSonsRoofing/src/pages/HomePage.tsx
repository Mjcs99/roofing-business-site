import Footer from "../components/layout/Footer";
import ProjectCarousel from "../components/layout/ProjectCarousel";
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">Trusted Roofing & Exterior Services</p>
          <h1>Protecting Homes With Quality Craftsmanship</h1>
          <p className="hero-text">
            Reliable roofing solutions for residential and commercial properties.
            From repairs to full replacements, we deliver durable work, honest
            service, and results you can count on.
          </p>

          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">
              Get a Free Estimate
            </a>
            <a href="/services" className="btn btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div className="trust-card">
            <h3>Experienced Team</h3>
            <p>
              Professional roofing work backed by skill, care, and attention to
              detail.
            </p>
          </div>
          <div className="trust-card">
            <h3>High-Quality Materials</h3>
            <p>
              We use dependable materials designed for long-term protection and
              performance.
            </p>
          </div>
          <div className="trust-card">
            <h3>Honest Service</h3>
            <p>
              Clear communication, fair pricing, and no surprises from start to
              finish.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container about-grid">
          <div className="about-text">
            <p className="section-label">About Us</p>
            <h2>Roofing done right the first time</h2>
            <p>
              We help homeowners and businesses protect what matters most with
              dependable roofing services and a commitment to quality. Whether
              you need repairs after a storm, ongoing maintenance, or a full
              replacement, we bring professionalism and pride to every project.
            </p>
            <p>
              Our goal is simple: deliver clean, lasting work and make the
              process easy for every customer.
            </p>
          </div>

          <div className="about-panel">
            <div className="stat-card">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">
                Commitment to Customer Satisfaction
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section section-light">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Our Services</p>
            <h2>Professional roofing solutions</h2>
            <p>
              Tailored services for homeowners, property managers, and
              businesses.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <h3>Roof Repairs</h3>
              <p>
                Fast, dependable repairs for leaks, storm damage, missing
                shingles, and general wear.
              </p>
            </article>

            <article className="service-card">
              <h3>Roof Replacements</h3>
              <p>
                Full tear-offs and replacement systems installed with care and
                durable materials.
              </p>
            </article>

            <article className="service-card">
              <h3>Inspections</h3>
              <p>
                Thorough roof inspections to catch issues early and help you
                plan the next step.
              </p>
            </article>

            <article className="service-card">
              <h3>Exterior Work</h3>
              <p>
                Improve protection and curb appeal with exterior services that
                complement your roof.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery section">
        <ProjectCarousel />

        <p className="gallery-note"></p>
      </section>

      <section className="why-us section section-light">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Why Choose Us</p>
            <h2>Clean work. Reliable service. Strong results.</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>Professional Appearance</h3>
              <p>
                We treat every property with respect and keep the job site as
                clean as possible.
              </p>
            </div>
            <div className="why-card">
              <h3>Clear Communication</h3>
              <p>
                We keep you informed throughout the process so you know exactly
                what to expect.
              </p>
            </div>
            <div className="why-card">
              <h3>Built to Last</h3>
              <p>
                We focus on workmanship and materials that give your roof
                lasting protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="safety-hero">
        <div className="safety-overlay" />

            <div className="container safety-content">
                <p className="section-label">Our Commitment to Safety</p>
                <h2>Safety comes first on every project</h2>

                <p className="safety-text">
                We take safety seriously for our crew, our customers, and your property.
                Every project is approached with careful planning, responsible work
                practices, and respect for the homes and businesses we work on.
                </p>

                <div className="safety-points">
                <div className="safety-point">
                    <h3>Careful Job Site Practices</h3>
                    <p>Organized work areas and disciplined site procedures.</p>
                </div>

                <div className="safety-point">
                    <h3>Protection for Your Property</h3>
                    <p>We work carefully around landscaping, siding, and surrounding areas.</p>
                </div>

                <div className="safety-point">
                    <h3>Professional Workmanship</h3>
                    <p>Our team approaches every project responsibly and with attention to detail.</p>
                </div>
                </div>
            </div>
        </section>
      <Footer />
    </main>
  );
}