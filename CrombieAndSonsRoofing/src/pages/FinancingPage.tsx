import Action from "../components/layout/Action";
import "./FinancingPage.css";

export default function FinancingPage() {
  return (
    <main className="financing-page">
      <section className="financing-hero">
        <div className="financing-hero-overlay" />
        <div className="container financing-hero-content">
          <p className="financing-eyebrow">Financing</p>
          <h1>Flexible financing options for your roofing project</h1>
          <p className="financing-hero-text">
            A new roof is a major investment. Financing can help make your
            project more manageable with affordable monthly payment options and
            a simple online application process.
          </p>

          <div className="financing-hero-actions">
            <a
              href="https://YOUR-FINANCING-LINK-HERE.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply Now
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              Learn How It Works
            </a>
          </div>

          <div className="financing-highlight">
            <span className="financing-highlight-label">Example Payment</span>
            <h3>Roof replacement from $129/month*</h3>
            <p>
              Financing options may be available to help spread project costs
              over time.
            </p>
            <span className="financing-disclaimer">
              *Subject to approval. Terms and monthly payments vary.
            </span>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">How Financing Works</p>
            <h2>A simple way to move forward sooner</h2>
            <p>
              Financing can help you complete important roofing work without
              delaying the project while you save the full amount upfront.
            </p>
          </div>

          <div className="finance-steps-grid">
            <article className="finance-step-card">
              <span className="finance-step-number">1</span>
              <h3>Review your project</h3>
              <p>
                We discuss the scope of your roofing or exterior work and help
                you understand the expected cost.
              </p>
            </article>

            <article className="finance-step-card">
              <span className="finance-step-number">2</span>
              <h3>Apply online</h3>
              <p>
                Complete a quick financing application through our financing
                partner using their secure online form.
              </p>
            </article>

            <article className="finance-step-card">
              <span className="finance-step-number">3</span>
              <h3>Review available options</h3>
              <p>
                If approved, you can review the payment options available to
                you and choose what works best for your budget.
              </p>
            </article>

            <article className="finance-step-card">
              <span className="finance-step-number">4</span>
              <h3>Start your project</h3>
              <p>
                Move forward with the work you need while paying over time
                according to your financing agreement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container financing-benefits-grid">
          <div>
            <p className="section-label">Why Homeowners Use Financing</p>
            <h2>More flexibility, less delay</h2>
            <p className="financing-body-text">
              Financing gives homeowners a way to move ahead with repairs,
              replacements, and exterior upgrades without putting off important
              work that protects the home.
            </p>
          </div>

          <div className="financing-benefits-card">
            <ul className="financing-benefits-list">
              <li>Spread costs into monthly payments</li>
              <li>Start urgent roofing work sooner</li>
              <li>Keep savings available for other needs</li>
              <li>Simple online application process</li>
              <li>Flexible options may be available</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Frequently Asked Questions</p>
            <h2>Common financing questions</h2>
          </div>

          <div className="finance-faq-grid">
            <article className="finance-faq-card">
              <h3>Does applying affect my ability to get a quote?</h3>
              <p>
                No. You can still request a quote and discuss your project
                before deciding whether financing is right for you.
              </p>
            </article>

            <article className="finance-faq-card">
              <h3>How do I apply?</h3>
              <p>
                You apply directly through our financing partner using the
                secure application link on this page.
              </p>
            </article>

            <article className="finance-faq-card">
              <h3>Can I finance repairs as well as replacements?</h3>
              <p>
                In many cases financing can be used for a range of roofing and
                exterior projects, depending on the provider and approval terms.
              </p>
            </article>

            <article className="finance-faq-card">
              <h3>Who decides approval and terms?</h3>
              <p>
                Approval, rates, and payment terms are determined by the
                third-party financing provider, not by our company.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <Action buttons={[{buttonText: "Apply For Financing", buttonRef: "ref"}, {buttonText: "Contact Us", buttonRef: "/contact"}]} prompt="Ready to get started?" header="Apply for financing today" directive="Use our secure online application to review available options and take the next step toward your roofing project."/>
      </section>
    </main>
  );
}