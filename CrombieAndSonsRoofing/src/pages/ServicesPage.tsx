import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-hero-overlay" />
        <div className="container services-hero-content">
            <p className="services-eyebrow">Our Services</p>
            <h1>Professional Roofing & Exterior Services</h1>
            <p className="services-hero-text">
            We provide dependable roofing and exterior solutions for homeowners
            and businesses. From repairs and inspections to full replacements,
            our focus is clean workmanship, honest communication, and durable
            results.
            </p>

            <div className="services-hero-actions">
            <a href="/financing" className="btn btn-primary">
                Explore Financing
            </a>
            <a href="/contact" className="btn btn-secondary">
                Get a Free Estimate
            </a>
            </div>

            <div className="hero-financing-card">
            <span className="hero-financing-label">Financing Available</span>
            <h3>Roof replacement from $129/month*</h3>
            <p>
                Affordable payment options available through our financing partner.
                Apply online quickly and securely.
            </p>

            <div className="hero-financing-actions">
                <a
                href="https://YOUR-FINANCING-LINK-HERE.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-financing-link"
                >
                Apply Now
                </a>
            </div>

            <span className="hero-financing-disclaimer">
                *Subject to approval. Terms and monthly payments vary.
            </span>
            </div>
        </div>
        </section>

      <section className="services-intro section">
        <div className="container services-intro-grid">
          <div>
            <p className="section-label">What We Do</p>
            <h2>Built to protect your property</h2>
            <p>
              Whether you need a quick repair after a storm or a full roof
              replacement, we approach every project with care and professionalism.
              We work to keep your home protected, improve curb appeal, and
              deliver results that last.
            </p>
          </div>

          <div className="services-highlight-card">
            <h3>Why homeowners choose us</h3>
            <ul>
              <li>Quality workmanship</li>
              <li>Reliable communication</li>
              <li>Professional job site cleanup</li>
              <li>Durable roofing materials</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Main Services</p>
            <h2>Roofing solutions you can count on</h2>
            <p>
              We offer a full range of roofing and exterior services tailored to
              your needs.
            </p>
          </div>

          <div className="service-detail-grid">
            <article className="service-detail-card">
              <div className="service-icon">01</div>
              <h3>Roof Repairs</h3>
              <p>
                Fast, dependable repair work for leaks, damaged shingles, flashing
                issues, and general wear. We identify the problem and fix it
                properly to help prevent larger issues later.
              </p>
            </article>

            <article className="service-detail-card">
              <div className="service-icon">02</div>
              <h3>Roof Replacements</h3>
              <p>
                When a roof has reached the end of its lifespan, we provide full
                replacement services with quality materials and careful installation
                for long-term protection and a clean finished look.
              </p>
            </article>

            <article className="service-detail-card">
              <div className="service-icon">03</div>
              <h3>Roof Inspections</h3>
              <p>
                Thorough inspections to assess roof condition, spot early warning
                signs, and help you make informed decisions before small problems
                become expensive repairs.
              </p>
            </article>

            <article className="service-detail-card">
              <div className="service-icon">04</div>
              <h3>Storm Damage Repairs</h3>
              <p>
                If your roof has been damaged by wind, hail, or severe weather,
                we can assess the damage and help restore your roof’s integrity
                quickly and professionally.
              </p>
            </article>

            <article className="service-detail-card">
              <div className="service-icon">05</div>
              <h3>Shingle Roofing</h3>
              <p>
                Asphalt shingle systems remain one of the most popular roofing
                choices for residential properties because they offer strong
                protection, affordability, and visual appeal.
              </p>
            </article>

            <article className="service-detail-card">
              <div className="service-icon">06</div>
              <h3>Exterior Services</h3>
              <p>
                We also handle exterior work that complements your roofing system,
                helping improve both protection and appearance for your property.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-section">
          <div className="section-header">
            <p className="section-label">Our Process</p>
            <h2>A simple, professional experience</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span className="process-step">Step 1</span>
              <h3>Consultation</h3>
              <p>
                We learn about your roofing needs and schedule a review of the
                project.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">Step 2</span>
              <h3>Inspection & Estimate</h3>
              <p>
                We assess the work required and provide a clear, straightforward
                estimate.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">Step 3</span>
              <h3>Professional Work</h3>
              <p>
                Our team completes the work with attention to detail, safety, and
                job site cleanliness.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">Step 4</span>
              <h3>Final Review</h3>
              <p>
                We make sure the finished result meets expectations and leaves
                your property protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    <section className="financing section section-light">
        <div className="container financing-grid">

            <div className="financing-text">
            <p className="section-label">Financing Available</p>
            <h2>Affordable payment options for your roofing project</h2>

            <p>
                Roofing work is an important investment. We offer financing options to
                help homeowners complete projects without paying the full cost upfront.
            </p>

            <p>
                Apply online quickly and securely through our financing partner to see
                available payment options.
            </p>

            <div className="financing-actions">
                <a
                href="https://YOUR-FINANCING-LINK-HERE.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                >
                Apply For Financing
                </a>

                <a href="#contact" className="btn btn-secondary">
                Ask About Financing
                </a>
            </div>
            </div>

            <div className="financing-card">
            <h3>Why financing helps</h3>

            <ul>
                <li>Spread payments over time</li>
                <li>Start your roofing project sooner</li>
                <li>Flexible approval options</li>
                <li>Simple online application</li>
            </ul>

            <p className="financing-note">
                Financing approval and terms are provided by our third-party financing
                partner.
            </p>
            </div>

        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="services-cta-box">
            <div>
              <p className="section-label">Get Started</p>
              <h2>Need roofing or exterior work done?</h2>
              <p>
                Reach out today for a free estimate and let’s talk about your
                project.
              </p>
            </div>

            <div className="services-cta-actions">
              <a href="tel:+10000000000" className="btn btn-primary">
                Call Now
              </a>
              <a href="mailto:info@roofingcompany.com" className="btn btn-outline-dark">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}