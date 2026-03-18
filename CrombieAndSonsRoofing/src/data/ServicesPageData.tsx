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
      description: "Rubber roofing is built for durability, standing up to high winds, hail, and extreme weather while providing long-lasting protection."
    }
  ];


  export const servicesComparisonContentCards = [
  {
    title: "Rubber Roofing",
    description:
      "Rubber roofing is a durable solution for homes facing high winds and hail, with a lifespan of up to 50 years.",
    points: [
      "Excellent durability in all weather conditions",
      "Strong resistance to hail and impact",
      "Clean, modern appearance",
      "Ideal for homes exposed to high winds and severe weather",
      "Long-lasting systems that can perform for up to 50 years",
    ],
  },
  {
    featured: true,
    title: "Asphalt Roofing",
    description:
      "Asphalt is often the best choice for homeowners who want dependable protection, proven performance, and a more budget-friendly replacement.",
    points: [
      "Lower upfront cost",
      "Popular residential roofing choice",
      "Works well on many sloped roofs",
      "Available in many colours and styles",
      "Great balance of appearance and affordability",
    ],
  },
  {
    title: "Metal Roofing",
    description:
      "Metal is a strong option when you want long-term durability, premium appearance, and excellent weather resistance.",
    points: [
      "Long lifespan",
      "Low maintenance",
      "Modern appearance",
      "Excellent weather resistance",
      "Strong long-term value",
    ],
  },
];

