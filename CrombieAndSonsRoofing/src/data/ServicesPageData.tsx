import heroImage from "../assets/roofing-services.webp"

export const servicesHero = {
  eyebrow: "Our Services",

  title: "Roofing & Exterior Services Built for Alberta Homes",

  description:

    "We provide asphalt roofing, Prolok and Duraclad metal roofing systems, rubber roofing, vinyl siding repairs, soffit and fascia work, emergency leak repairs, and exterior cleaning services to help protect your homeand keep it looking its best.",

  backgroundImage: heroImage,

  actions: [
    {
      label: "Get a Free Estimate",
      href: "/contact",
      variant: "primary" as const,
    },
    {
      label: "Explore Financing",
      href: "/financing",
      variant: "secondary" as const,
    },
  ],
};

import asphalt from "../assets/services_photos/asphalt-roofing-system.webp"
import metal from "../assets/services_photos/metal-roofing-system.webp"
import rubber from "../assets/services_photos/rubber-roofing-system.webp"

export const servicesContentCards = [
    {
      image: asphalt,
      alt: "Asphalt roof shingles",
      title: "When asphalt makes sense",
      description: "Asphalt is ideal when you want a reliable roofing system with strong curb appeal and a more affordable upfront cost for a standard sloped roof."
    },
    {
      image: metal,
      alt: "When metal makes sense",
      title: "Storm Damage Repair",
      description: "Metal is the better choice when you want long-term value, premium appearance, and a highly durable system built for the long haul."
    },
    {
      image: rubber,
      alt: "Rubber roof shingles",
      title: "When rubber makes sense",
      description: "Rubber is a smart solution for flat or low-slope roof areas where waterproofing, drainage, and durability are especially important."
    }
  ];