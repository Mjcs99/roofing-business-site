import ScrollReveal from "../components/animations/ScrollReveal";
import Footer from "../components/layout/Footer";
import ProjectCarousel from "../components/layout/ProjectCarousel";
import beforeRoof from "../assets/before-roof-repair.jpg";
import afterRoof from "../assets/after-roof-repair.jpg";
import steepRoofOne from "../assets/homepage_photos/steep-roof-1.webp"
import steepRoofTwo from "../assets/homepage_photos/steep-roof-2.webp"
import "./HomePage.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <ScrollReveal y={0} x={-50} delay={0.2}>
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
          </ScrollReveal>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <ScrollReveal y={30} delay={0.05}>
            <div className="trust-card">
              <h3>Experienced Team</h3>
              <p>
                Professional roofing work backed by skill, care, and attention to
                detail.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal y={30} delay={0.15}>
            <div className="trust-card">
              <h3>High-Quality Materials</h3>
              <p>
                We use dependable materials designed for long-term protection and
                performance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal y={30} delay={0.25}>
            <div className="trust-card">
              <h3>Honest Service</h3>
              <p>
                Clear communication, fair pricing, and no surprises from start to
                finish.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container about-grid">
          <ScrollReveal x={-40}>
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
          </ScrollReveal>

          <ScrollReveal x={40} delay={0.1}>
            <div className="about-panel">
              <div className="stat-card">
                <span className="stat-number">10+</span>
                <span className="stat-label">
                  Years of Experience <br />
                  <strong>serving Red Deer & surrounding areas</strong>
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">
                  Commitment to <strong>Customer Satisfaction</strong>
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="services" className="services section section-light">
        <div className="container">
          <ScrollReveal y={30}>
            <div className="section-header">
              <p className="section-label">Our Services</p>
              <h2>Professional roofing solutions</h2>
              <p>
                Tailored services for homeowners, property managers, and
                businesses.
              </p>
            </div>
          </ScrollReveal>

          <div className="services-grid">
            <ScrollReveal y={30} delay={0.05}>
              <article className="service-card">
                <h3>Roof Repairs</h3>
                <p>
                  Fast, dependable repairs for leaks, storm damage, missing
                  shingles, and general wear.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.1}>
              <article className="service-card">
                <h3>Roof Replacements</h3>
                <p>
                  Full tear-offs and replacement systems installed with care and
                  durable materials.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.15}>
              <article className="service-card">
                <h3>Inspections</h3>
                <p>
                  Thorough roof inspections to catch issues early and help you
                  plan the next step.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.2}>
              <article className="service-card">
                <h3>Exterior Work</h3>
                <p>
                  Improve protection and curb appeal with exterior services that
                  complement your roof.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="steep-roofs section">
        <div className="container">

            <ScrollReveal y={30}>
            <div className="steep-roofs-text">

                <p className="section-label">Steep Roof Specialists</p>

                <h2>We handle steep and challenging roofs safely</h2>

                <p>
                Steep roof pitches require experience, proper safety practices,
                and careful workmanship. Our team is equipped to work confidently
                on high-slope roofing systems while maintaining quality and
                attention to detail.
                </p>

                <ul className="steep-roof-list">
                <li>Experienced with steep residential roof pitches</li>
                <li>Proper safety equipment and work practices</li>
                <li>Careful installation on difficult roof sections</li>
                <li>Clean, precise workmanship on challenging projects</li>
                </ul>

            </div>
            </ScrollReveal>

            <ScrollReveal y={40}>
            <div className="steep-roofs-images">

                <img
                src={steepRoofOne}
                alt="Roofers working safely on a steep residential roof"
                className="steep-roof-img"
                loading="lazy"
                />

                <img
                src={steepRoofTwo}
                alt="Professional roofing crew installing shingles on steep roof"
                className="steep-roof-img"
                loading="lazy"
                />

            </div>
            </ScrollReveal>

        </div>
        </section>
      
      <section className="before-after section">
        <div className="container">
            <ScrollReveal y={30}>
            <div className="section-header before-after-header">
                <p className="section-label">Recent Project</p>
                <h2>See the transformation</h2>
                <p>
                This project shows the difference a professional re-roof can make.
                Our team removed the aging materials and installed a durable new
                roofing system built to protect the home for years to come.
                </p>
            </div>
            </ScrollReveal>
            
            <div className="before-after-grid">
            <ScrollReveal x={-40} delay={0.05}>
                <div className="before-after-card">
                <div className="before-after-image-wrap">
                    <img
                    src={beforeRoof}
                    alt="Worn roof before replacement with aging shingles"
                    className="before-after-image"
                    loading="lazy"
                    />
                    <span className="before-after-badge before-badge">Before</span>
                </div>
                <div className="before-after-body">
                    <h3>Before Re-Roof</h3>
                    <p>
                    Aging shingles and visible wear that reduced both the roof's
                    performance and the home's curb appeal.
                    </p>
                </div>
                </div>
            </ScrollReveal>

            <ScrollReveal x={40} delay={0.15}>
                <div className="before-after-card">
                <div className="before-after-image-wrap">
                    <img
                    src={afterRoof}
                    alt="Newly installed asphalt shingle roof after replacement"
                    className="before-after-image"
                    loading="lazy"
                    />
                    <span className="before-after-badge after-badge">After</span>
                </div>
                <div className="before-after-body">
                    <h3>After Re-Roof</h3>
                    <p>
                    A brand new roofing system installed with quality materials and
                    professional workmanship for long-term protection.
                    </p>
                </div>
                </div>
            </ScrollReveal>
            </div>
        </div>
      </section>
        
      <section id="gallery" className="gallery section">
        <ScrollReveal y={30}>
          <ProjectCarousel />
        </ScrollReveal>

        <p className="gallery-note"></p>
      </section>

      <section className="why-us section section-light">
        <div className="container">
          <ScrollReveal y={30}>
            <div className="section-header">
              <p className="section-label">Why Choose Us</p>
              <h2>Clean work. Reliable service. Strong results.</h2>
            </div>
          </ScrollReveal>

          <div className="why-grid">
            <ScrollReveal y={30} delay={0.05}>
              <div className="why-card">
                <h3>Professional Appearance</h3>
                <p>
                  We treat every property with respect and keep the job site as
                  clean as possible.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.1}>
              <div className="why-card">
                <h3>Clear Communication</h3>
                <p>
                  We keep you informed throughout the process so you know exactly
                  what to expect.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.15}>
              <div className="why-card">
                <h3>Built to Last</h3>
                <p>
                  We focus on workmanship and materials that give your roof
                  lasting protection.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="safety-hero">
        <div className="safety-overlay" />

        <div className="container safety-content">
          <ScrollReveal y={30}>
            <>
              <p className="section-label">Our Commitment to Safety</p>
              <h2>Safety comes first on every project</h2>

              <p className="safety-text">
                We take safety seriously for our crew, our customers, and your property.
                Every project is approached with careful planning, responsible work
                practices, and respect for the homes and businesses we work on.
              </p>
            </>
          </ScrollReveal>

          <div className="safety-points">
            <ScrollReveal y={30} delay={0.05}>
              <div className="safety-point">
                <h3>Careful Job Site Practices</h3>
                <p>Organized work areas and disciplined site procedures.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.1}>
              <div className="safety-point">
                <h3>Protection for Your Property</h3>
                <p>We work carefully around landscaping, siding, and surrounding areas.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal y={30} delay={0.15}>
              <div className="safety-point">
                <h3>Professional Workmanship</h3>
                <p>Our team approaches every project responsibly and with attention to detail.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}