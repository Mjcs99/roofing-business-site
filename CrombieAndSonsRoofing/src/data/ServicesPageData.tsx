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
