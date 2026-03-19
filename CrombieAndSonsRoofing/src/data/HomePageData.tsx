import heroImage from "../assets/homepage_photos/homepage-hero-roof-finished.webp"
export const homeHero = {
  eyebrow: "Trusted Roofing & Exterior Services",

  title: "Protecting Homes With Quality Craftsmanship",

  description:
    "Reliable roofing solutions for residential and commercial properties. From repairs to full replacements, we deliver durable work, honest service, and results you can count on.",

  backgroundImage: heroImage,

  actions: [
    {
      label: "Get a Free Estimate",
      href: "/contact",
      variant: "primary" as const,
    },
    {
      label: "View Services",
      href: "/services",
      variant: "secondary" as const,
    },
  ],
};

import safetyHeroImage from "/safety-roofing.png"

export const safetyHero = {
  className: "safety-hero",

  eyebrow: "Our Commitment to Safety",

  title: "Safety comes first on every project",

  description:
    "We take safety seriously for our crew, our customers, and your property. Every project is approached with careful planning, responsible work practices, and respect for the homes and businesses we work on.",

  backgroundImage: safetyHeroImage,

  actions: [],
};

import roof1 from "../assets/roof-photo.webp";
import roof2 from "../assets/storm-damage-repair.jpg";
import roof3 from "../assets/carousel2.png";


export const homeContentCards = [
    {
      image: roof1,
      alt: "Shingle roof replacement project",
      title: "Residential Roof Replacement",
      description: "Complete shingle replacement with clean finishing."
    },
    {
      image: roof2,
      alt: "Roof repair project",
      title: "Storm Damage Repair",
      description: "Repair work after hail and wind damage."
    },
    {
      image: roof3,
      alt: "Roof repair project",
      title: "Roof Maintenance",
      description: "Preventative maintenance to extend the life of your roof."
    }
  ];

import steepRoofOne from "../assets/homepage_photos/steep-roof-1.webp"
import steepRoofTwo from "../assets/homepage_photos/steep-roof-2.webp"
import carefulInstallation from "../assets/roofing-services.webp"

export const steepRoofContentCards = [
  {title: "Experienced with steep residential roof pitches", image: steepRoofOne},
  {title: "Proper safety equipment and work practices", image: safetyHeroImage},
  {title: "Careful installation on difficult roof sections", image: carefulInstallation},
  {title: "Clean, precise workmanship on challenging projects", image: steepRoofTwo}
]

import beforeRoof from "../assets/before-roof-repair.jpg";
import afterRoof from "../assets/after-roof-repair.jpg";

export const beforeAfterContentCards = [
  {title: "Before roof replacement", description: "Aging shingles and visible wear that reduced both the roof's performance and the home's curb appeal.", image: beforeRoof},
  {title: "After roof replacement", description: "A brand new roofing system installed with quality materials and professional workmanship for long-term protection.", image: afterRoof}
];

export const steepRoofSection = {
  className: "steep-roof-section",
  label: "Steep Roof Specialists", 
  title: "We handle steep and challenging roofs safely", 
  description: "Steep roof pitches require experience, proper safety practices, and careful workmanship. Our team is equipped to work confidently on high-slope roofing systems while maintaining quality and attention to detail.", 
  reveal: true
}

export const homepageServicesSection = {
  label: "Our Services",
  title: "Professional roofing solutions",
  description: "Tailored services for homeowners, property managers, and businesses.",
  reveal: true
}

export const beforeAfterSection = {
  label: "Recent Project",
  title: "See the transformation",
  description: "This project shows the difference a professional re-roof can make. Our team removed the aging materials and installed a durable new roofing system built to protect the home for years to come.",
  reveal: true
}
export const seeOurWorkSection ={
  label: "Project Gallery",
  title: "See our work",
  description: "Browse recent roofing and exterior projects completed with care, quality workmanship, and attention to detail.",
  reveal: true
}

export const aboutSection = {
  reveal: true,
  className: "about-grid",
  label: "About Us",
  title: "Roofing done right the first time",
  description: (
    <>
      <p>
        We help homeowners and businesses protect what matters most with dependable roofing services built for Alberta conditions. From small repairs to full roof replacements, every project is handled with care, attention to detail, and a commitment to doing the job right the first time.
      </p>

      <div className="section-divider" />

      <p>
        Whether you're dealing with storm damage, aging materials, or planning ahead, we provide clear communication, honest recommendations, and work you can rely on long after the job is done. Our focus is simple — durable results, professional service, and roofs that hold up when it matters most.
      </p>
    </>
  )
}

export const badgeUpAnimation = {y: 40, x: 0}

import trustedQuality from "../assets/svg/badges/trusted-quality.svg"
import weatherTested from "../assets/svg/badges/weather-tested.svg"
import builtToLast from "../assets/svg/badges/built-to-last.svg"
import stormReady from "../assets/svg/badges/storm-ready.svg"

export const badges = [
  { src: trustedQuality, alt: "Trusted quality workmanship badge" },
  { src: stormReady, alt: "Storm-ready roofing for harsh weather conditions" },
  { src: weatherTested, alt: "Weather-tested roofing built for durability" },
  { src: builtToLast, alt: "Built-to-last roofing and long-term protection" },
];

import galleryOne from "../assets/homepage_photos/gallery/gallery-1.png";
import galleryTwo from "../assets/homepage_photos/gallery/gallery-2.jpg"
import galleryThree from "../assets/homepage_photos/gallery/gallery-3.jpg";
import galleryFour from "../assets/homepage_photos/gallery/gallery-4.jpg";
import galleryFive from "../assets/homepage_photos/gallery/gallery-5.jpg";
import gallerySix from "../assets/homepage_photos/gallery/gallery-6.png";
import { MdDescription } from "react-icons/md";

export const galleryImages = [
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

export const homeTrustCards = {
  className: "trust-card",
  style: { "--columns": 3 } as React.CSSProperties,
  items: [
  {
    title: "Experienced Team",
    description:
      "Professional roofing work backed by skill, care, and attention to detail.",
  },
  {
    title: "High-Quality Materials",
    description:
      "We use dependable materials designed for long-term protection and performance.",
  },
  {
    title: "Honest Service",
    description:
      "Clear communication, fair pricing, and no surprises from start to finish.",
  }]
};

