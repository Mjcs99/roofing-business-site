import "./HomePage.css";
import { useState } from "react";
import {
  aboutSection,
  badges,
  badgeUpAnimation,
  beforeAfterContentCards,
  beforeAfterSection,
  galleryImages,
  homeContentCards,
  homeHero,
  homepageServicesSection,
  homeStatCards,
  homeTrustCards,
  safetyHero,
  seeOurWorkSection,
  steepRoofContentCards,
  steepRoofSection,
} from "../data/HomePageData";
import ContentCards from "../components/layout/ContentCards";
import PageHero from "../components/layout/PageHero";
import Section from "../components/layout/Section";
import ScrollReveal from "../components/animations/ScrollReveal";
import Footer from "../components/layout/Footer";

import Lightbox from "yet-another-react-lightbox-lite";
import "yet-another-react-lightbox-lite/styles.css";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<number>();

  return (
    <main className="home-page">
      <PageHero {...homeHero} />

      <section className="trust-bar">
        <ContentCards {...homeTrustCards} />
      </section>

      <Section {...aboutSection}>
        <ContentCards {...homeStatCards} />

        <div className="about-badges">
          {badges.map((badge, i) => (
            <ScrollReveal
              key={i}
              {...badgeUpAnimation}
              delay={0.1 * (i + 1)}
            >
              <img src={badge.src} alt={badge.alt} />
            </ScrollReveal>
          ))}
        </div>

        <div className="about-note">
          <h3>What you can expect</h3>
          <ul>
            <li>Clear estimates and honest recommendations</li>
            <li>Reliable scheduling and clean job sites</li>
            <li>Work built for Alberta weather</li>
          </ul>
        </div>
      </Section>

      <Section {...steepRoofSection}>
        <ContentCards {...steepRoofContentCards} elevated/>
      </Section>
      <PageHero {...safetyHero}>
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
              <p>
                We work carefully around landscaping, siding, and surrounding
                areas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal y={30} delay={0.15}>
            <div className="safety-point">
              <h3>Professional Workmanship</h3>
              <p>
                Our team approaches every project responsibly and with attention
                to detail.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </PageHero>

      <Section {...homepageServicesSection}>
        <ContentCards
          items={homeContentCards}
          style={{ margin: "0 2rem" }}
        />
      </Section>

      <Section {...beforeAfterSection}>
        <ContentCards {...beforeAfterContentCards} />
      </Section>

      <Section {...seeOurWorkSection}>
        <div className="photo-gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              className="photo-gallery-item"
              onClick={() => setSelectedImage(index)}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="photo-gallery-image"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        <Lightbox
          slides={galleryImages}
          index={selectedImage}
          setIndex={setSelectedImage}
        />
      </Section>

      <Footer />
    </main>
  );
}