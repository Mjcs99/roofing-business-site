import roof1 from "../../assets/roof-photo.png";
import roof2 from "../../assets/carousel1.png";
import roof3 from "../../assets/carousel2.png";

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
  {
    src: roof3,
    alt: "Roof repair project",
    title: "Storm Damage Repair",
    description: "Repair work after hail and wind damage."
  }
];

export default function ProjectCarousel() {
  return (
    <div className="project-gallery">
      {images.map((img, i) => (
        <div key={i} className="gallery-card">
          <img src={img.src} alt={img.alt} className="gallery-image" />

          <div className="gallery-caption">
            <h3>{img.title}</h3>
            <p>{img.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}