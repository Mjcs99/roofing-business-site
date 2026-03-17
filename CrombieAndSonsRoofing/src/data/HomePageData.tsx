import heroImage from "../assets/roof-photo.webp"
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
