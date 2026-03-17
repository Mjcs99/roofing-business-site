import ScrollReveal from "../components/animations/ScrollReveal";
import Footer from "../components/layout/Footer";
import beforeRoof from "../assets/before-roof-repair.jpg";
import afterRoof from "../assets/after-roof-repair.jpg";

import "./HomePage.css";
import { useState } from "react";

import galleryOne from "../assets/homepage_photos/gallery/gallery-1.png";
import galleryTwo from "../assets/homepage_photos/gallery/gallery-2.jpg"
import galleryThree from "../assets/homepage_photos/gallery/gallery-3.jpg";
import galleryFour from "../assets/homepage_photos/gallery/gallery-4.jpg";
import galleryFive from "../assets/homepage_photos/gallery/gallery-5.jpg";
import gallerySix from "../assets/homepage_photos/gallery/gallery-6.png";
import PageHero from "../components/layout/PageHero";
import { homeContentCards, homeHero, safetyHero, steepRoofContentCards } from "../data/HomePageData";
import ContentCards from "../components/layout/ContentCards";

export default function HomePage() {
    const galleryImages = [
        {
        src: galleryOne,
        alt: "Completed residential roofing project",
        },
        {
        src: galleryTwo,
        alt: "Roof replacement project in progress",
        },
        {
        src: galleryThree,
        alt: "Steep roof project with new shingles installed",
        },
        {
        src: galleryFour,
        alt: "Professional roofing crew working on a home",
        },
        {
        src: galleryFive,
        alt: "Finished roof installation with clean lines",
        },
        {
        src: gallerySix,
        alt: "Residential exterior and roofing project",
        },
    ];
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
                <ContentCards items={steepRoofContentCards} style={{ "--columns": 4, "--padding": 0, "--alignment": "center"} as React.CSSProperties}/>
            </div>
            </ScrollReveal>
        </div>
        </section>
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
        
      <section id="services-highlight" className="gallery section">

        <div className="container">
            
            <ScrollReveal y={30}>
            <div className="section-header">
                <p className="section-label">Our Services</p>
                <h2>Quality roofing solutions for every home</h2>
                <p>
                From repairs to full replacements, we provide dependable roofing
                services designed to protect your home and improve its long-term
                performance.
                </p>
            </div>
            </ScrollReveal>

        </div>

        <ScrollReveal y={30}>
            <ContentCards items={homeContentCards} style={{ margin: "0 2rem" }}/>
        </ScrollReveal>

        </section>

      <section className="photo-gallery section section-light">
        <div className="container">
          <ScrollReveal y={30}>
            <div className="section-header">
              <p className="section-label">Project Gallery</p>
              <h2>See our work</h2>
              <p>
                Browse recent roofing and exterior projects completed with care,
                quality workmanship, and attention to detail.
              </p>
            </div>
          </ScrollReveal>

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
        </div>
      </section>

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