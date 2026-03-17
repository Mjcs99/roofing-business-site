import Footer from "../components/layout/Footer";
import "./ServicesPage.css";
import hero from "../assets/roofing-services.webp"
import ScrollReveal from "../components/animations/ScrollReveal";
import cedar from "../assets/services_photos/cedar-shake-cleaning.jpg"
import gutter from "../assets/services_photos/gutter.jpg"
import siding from "../assets/services_photos/vinyl-siding-repairs.png"
import soffit from "../assets/services_photos/soffit-fascia-replacement.webp"
import repairs from "../assets/services_photos/emergency-leaks-repairs.webp"
import sidingCleaning from "../assets/services_photos/siding-cleaning.webp"
import roofCleaning from "../assets/services_photos/roof-cleaning.webp"
import PageHero from "../components/layout/PageHero";
import { servicesContentCards, servicesHero } from "../data/ServicesPageData";
import ContentCards from "../components/layout/ContentCards";

const serviceImages = {
  hero,
  siding,
  soffit,
  repairs,
  cedar,
  gutter,
  sidingCleaning,
  roofCleaning,
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <PageHero {...servicesHero}/>
      <section className="services-anchor-nav section">
        
        <div className="container">
          <div className="services-anchor-nav-card">
            <p className="section-label">Browse Services</p>
            <h2>Jump to the section you want</h2>
            <ScrollReveal x={-50} y={0}>
            <div className="services-anchor-links">
                <a href="#roofing-options" className="services-anchor-link">
                Roofing Options
                </a>
                <a href="#how-to-choose" className="services-anchor-link">
                How To Choose
                </a>
                <a href="#featured-services" className="services-anchor-link">
                Featured Services
                </a>
                <a href="#cleaning-services" className="services-anchor-link">
                Cleaning Services
                </a>
                <a href="#our-process" className="services-anchor-link">
                Our Process
                </a>
            </div>
            </ScrollReveal>
          </div>
        </div>
       
      </section>
      
      <section className="section material-comparison-section" id="roofing-options">
        <ScrollReveal  y={40} delay={0.15}>
        <div className="container">
          <div className="section-header">
                <p className="section-label">Roofing Options</p>
                <h2>Asphalt vs rubber vs metal: which roofing system is right for your home?</h2>
                <p>
                The best material depends on your roof design, budget, long-term goals,
                and how you want the finished result to look and perform.
                </p>
            
          </div>
            
          <div className="comparison-grid comparison-grid-three">
            <article className="comparison-card">
              <h3>Asphalt Roofing</h3>
              <ul>
                <li>Lower upfront cost</li>
                <li>Popular residential roofing choice</li>
                <li>Works well on many sloped roofs</li>
                <li>Available in many colours and styles</li>
                <li>Great balance of appearance and affordability</li>
              </ul>
              <p>
                Asphalt is often the best choice for homeowners who want dependable
                protection, proven performance, and a more budget-friendly replacement.
              </p>
            </article>

            <article className="comparison-card comparison-card-featured">
              <h3>Rubber Roofing</h3>
                <ul>
                <li>Excellent durability in all weather conditions</li>
                <li>Strong resistance to hail and impact</li>
                <li>Clean, modern appearance</li>
                <li>Ideal for homes exposed to high winds and severe weather</li>
                <li>Long-lasting systems that can perform for up to 50 years</li>
                </ul>
              <p>
                Rubber roofing is a strong choice when your home has flat or low-slope
                areas and you need a material built to manage water reliably.
              </p>
            </article>

            <article className="comparison-card">
              <h3>Metal Roofing</h3>
              <ul>
                <li>Longer lifespan</li>
                <li>Premium appearance</li>
                <li>Excellent durability in harsh weather</li>
                <li>Lower maintenance over time</li>
                <li>Strong long-term value</li>
              </ul>
              <p>
                Metal is a great fit for homeowners who want to invest more upfront for
                long-term durability, premium performance, and a cleaner finished look.
              </p>
            </article>
          </div>
          <ContentCards items={servicesContentCards}/>
        </div>
        </ScrollReveal>
      </section>
      <ScrollReveal y={40} delay={0.1}>
      <section className="section section-light" id="how-to-choose">
        <div className="container">
            
          <div className="section-header">
            
            <p className="section-label">How To Choose</p>
            <h2>Which roofing material should you choose?</h2>
          </div>
            
          <div className="service-detail-grid">
            <article className="service-detail-card">
              <div className="service-icon">A</div>
              <h3>Choose Asphalt If...</h3>
              <p>
                You want a dependable, attractive roofing system with a lower upfront
                cost and a proven fit for standard residential sloped roofs.
              </p>
            </article>

            <article className="service-detail-card">
              <div className="service-icon">R</div>
              <h3>Choose Rubber If...</h3>
              <p>
                You have a flat or low-slope area and want a roofing material designed
                for strong waterproofing performance and practical durability.
              </p>
            </article>

            <article className="service-detail-card">
              <div className="service-icon">M</div>
              <h3>Choose Metal If...</h3>
              <p>
                You want a premium look, longer lifespan, and stronger long-term value,
                and you are comfortable with a higher upfront investment.
              </p>
            </article>
          </div>
        </div>
      </section>
      </ScrollReveal>
      <section className="section service-showcase" id="featured-services">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Featured Services</p>
            <h2>See the kinds of work we do</h2>
          </div>

          <div className="featured-service-row">
            <div className="featured-service-image">
              <img src={serviceImages.siding} alt="Vinyl siding and exterior repairs" />
            </div>
            <div className="featured-service-content">
              <h3>Vinyl siding & repairs</h3>
              <p>
                Siding does more than improve how your home looks. It also helps protect
                the structure from the elements. Repairing damaged siding or updating worn
                exterior finishes can improve curb appeal while helping the home stay better
                sealed and protected.
              </p>
              <ul>
                <li>Replace cracked or damaged panels</li>
                <li>Improve exterior appearance</li>
                <li>Help protect against moisture and weather exposure</li>
              </ul>
            </div>
          </div>

          <div className="featured-service-row featured-service-row-reverse">
            <div className="featured-service-image">
              <img src={serviceImages.soffit} alt="Soffit and fascia installation" />
            </div>
            <div className="featured-service-content">
              <h3>Soffit & fascia replacement</h3>
              <p>
                Your roofline needs more than shingles or metal panels to perform properly.
                Soffit and fascia support ventilation, help manage moisture, and create a
                clean finished edge around the roof. Replacing worn or damaged pieces can
                improve both function and appearance.
              </p>
              <ul>
                <li>Better roofline appearance</li>
                <li>Improved ventilation support</li>
                <li>Protection against weather-related deterioration</li>
              </ul>
            </div>
          </div>

          <div className="featured-service-row">
            <div className="featured-service-image">
              <img src={serviceImages.repairs} alt="Emergency roof leak repair" />
            </div>
            <div className="featured-service-content">
              <h3>Emergency leaks & repairs</h3>
              <p>
                When water is getting in, speed matters. Fast repairs can help reduce
                damage to insulation, ceilings, drywall, and interior finishes. We help
                identify the source and address the issue before it gets worse.
              </p>
              <ul>
                <li>Leak detection and repair</li>
                <li>Storm and weather-related repairs</li>
                <li>Prevent bigger damage and higher costs later</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light cleaning-section" id="cleaning-services">
        <div className="container">
          <div className="section-header">
            <ScrollReveal  y={40} delay={0.1}>
            <p className="section-label">Cleaning Services</p>
            <h2>Roof, siding, cedar shake, and gutter cleaning</h2>
            </ScrollReveal>
            <ScrollReveal  y={0} x={50} delay={0.2}>
            <p>
              Cleaning isn’t just cosmetic. Removing buildup from your roof, siding,
              cedar shake, and gutters can help maintain the condition and appearance
              of your property.
            </p>
            </ScrollReveal>
          </div>

          <div className="cleaning-grid">
            <article className="cleaning-card">
              <img src={serviceImages.roofCleaning} alt="Roof cleaning service" />
              <div className="cleaning-card-content">
                <h3>Roof Cleaning</h3>
                <p>
                  Remove debris and buildup that can trap moisture and leave your roof
                  looking worn before its time.
                </p>
              </div>
            </article>

            <article className="cleaning-card">
              <img src={serviceImages.sidingCleaning} alt="Siding cleaning service" />
              <div className="cleaning-card-content">
                <h3>Siding Cleaning</h3>
                <p>
                  Refresh the exterior of your home and restore cleaner curb appeal.
                </p>
              </div>
            </article>

            <article className="cleaning-card">
              <img src={serviceImages.cedar} alt="Cedar shake cleaning service" />
              <div className="cleaning-card-content">
                <h3>Cedar Shake Cleaning</h3>
                <p>
                  Help preserve the appearance and condition of cedar by removing surface buildup.
                </p>
              </div>
            </article>

            <article className="cleaning-card">
              <img src={serviceImages.gutter} alt="Gutter cleaning service" />
              <div className="cleaning-card-content">
                <h3>Gutter Cleaning</h3>
                <p>
                  Keep water flowing properly and reduce the risk of overflow and drainage issues.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="our-process">
        <div className="container process-section">
          <div className="section-header">
            <p className="section-label">Our Process</p>
            <h2>A simple, professional experience from start to finish</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span className="process-step">Step 1</span>
              <h3>Consultation</h3>
              <p>
                We talk through your project, concerns, goals, and budget.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">Step 2</span>
              <h3>Inspection & Recommendation</h3>
              <p>
                We assess the condition of the roof or exterior and recommend the most
                practical option for your property.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">Step 3</span>
              <h3>Clear Estimate</h3>
              <p>
                We provide a straightforward quote so you understand the scope of work
                and available options.
              </p>
            </div>

            <div className="process-card">
              <span className="process-step">Step 4</span>
              <h3>Professional Work & Cleanup</h3>
              <p>
                We complete the work with care, communication, and attention to site cleanliness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="financing section section-light">
        <div className="container financing-grid">
          <div className="financing-text">
            <p className="section-label">Financing Available</p>
            <h2>Make your project easier to start</h2>

            <p>
              Roofing and exterior work is an investment in your home. Financing can
              help you move forward sooner, especially for larger replacement projects
              or urgent repairs that should not wait.
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

              <a href="/contact" className="btn btn-secondary">
                Ask About Financing
              </a>
            </div>
          </div>

          <div className="financing-card">
            <h3>Why financing helps</h3>

            <ul>
              <li>Start important work sooner</li>
              <li>Spread payments over time</li>
              <li>Helpful for full roof replacements</li>
              <li>Simple online application process</li>
            </ul>

            <p className="financing-note">
              Financing approval and terms are provided by our third-party financing partner.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-cta-section">
        <div className="container services-cta-card">
          <ScrollReveal  y={40} delay={0.1}>
          <p className="section-label">Need Help Deciding?</p>
          <h2>We can help you choose the right roofing or exterior solution</h2>
          </ScrollReveal>
          <ScrollReveal  y={0} x={50} delay={0.2}>
          <p>
            Not sure whether asphalt, rubber, or metal is the better fit? Need repairs
            now but want to plan for a replacement later? We’ll walk you through your
            options and give you an honest recommendation.
          </p>
        
          <div className="services-cta-actions">
            <a href="/contact" className="btn btn-primary">
              Request a Free Estimate
            </a>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}