import { useState } from "react";
import roof1 from "../../assets/roof-photo.jpeg";
import roof2 from "../../assets/carousel1.jpg";

import "./ProjectCarousel.css";

const images = [
  {
    src: roof1,
    alt: "Shingle roof replacement project",
    title: "Residential Roof Replacement",
    description: "Complete shingle replacement with clean finishing."
  },
  {
    src: roof2,
    alt: "Roof repair project",
    title: "Storm Damage Repair",
    description: "Repair work after hail and wind damage."
  },

];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="project-carousel">
      <button className="carousel-arrow" onClick={goPrev} aria-label="Previous image">
        ‹
      </button>

      <div className="carousel-content">
        <div className="carousel-image-wrap">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="carousel-image"
          />
        </div>

        <div className="carousel-caption">
          <h3>{currentImage.title}</h3>
          <p>{currentImage.description}</p>
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button className="carousel-arrow" onClick={goNext} aria-label="Next image">
        ›
      </button>
    </div>
  );
}