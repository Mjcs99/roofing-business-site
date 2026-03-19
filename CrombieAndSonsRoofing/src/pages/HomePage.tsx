import "./HomePage.css";
import { useState } from "react";
import { aboutSection, badges, badgeUpAnimation, beforeAfterContentCards, beforeAfterSection, galleryImages, homeContentCards, homeHero, homepageServicesSection, homeTrustCards, safetyHero, seeOurWorkSection, steepRoofContentCards, steepRoofSection } from "../data/HomePageData";
import ContentCards from "../components/layout/ContentCards";
import PageHero from "../components/layout/PageHero";
import Section from "../components/layout/Section";
import ScrollReveal from "../components/animations/ScrollReveal";
import Footer from "../components/layout/Footer";

export default function HomePage() {
    
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openImage = (index: number) => setSelectedImage(index);
    const closeImage = () => setSelectedImage(null);

    const showPrevImage = () => {
        if (selectedImage === null) return;
        setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
        );
    };

    const showNextImage = () => {
        if (selectedImage === null) return;
        setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
        );
    };
    
  return (
    <main className="home-page">
      <PageHero {...homeHero} />
      <section className="trust-bar">
        <ContentCards {...homeTrustCards}/>
      </section>
      <Section {...aboutSection}>
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
        <div className="about-badges">
          {badges.map((badge, i) => (
            <ScrollReveal key={i} {...badgeUpAnimation} delay={0.1 * (i + 1)}>
              <img src={badge.src} alt={badge.alt}/>
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
        <ContentCards items={steepRoofContentCards} elevated style={{ "--columns": 4, "--padding": 0, "--alignment": "center"} as React.CSSProperties}/>
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
      </PageHero>
      <Section {...homepageServicesSection}>
        <ContentCards items={homeContentCards} style={{ margin: "0 2rem" }}/>
      </Section>
      <Section {...beforeAfterSection}>
        <ContentCards items={beforeAfterContentCards} className="before-after-cards" style={{"--columns": 2} as React.CSSProperties}/>
      </Section>
      <Section {...seeOurWorkSection}>
        <div className="photo-gallery-grid">
            {galleryImages.map((image, index) => (
              <ScrollReveal y={30} delay={0.05 * (index + 1)} key={index}>
                <button
                  type="button"
                  className="photo-gallery-item"
                  onClick={() => openImage(index)}
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="photo-gallery-image"
                    loading="lazy"
                  />
                </button>
              </ScrollReveal>
            ))}
          </div>
      </Section>
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeImage}>
          <button
            type="button"
            className="lightbox-close"
            onClick={closeImage}
            aria-label="Close image preview"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="lightbox-image"
            />
          </div>

          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
      <Footer />
    </main>
  );
}