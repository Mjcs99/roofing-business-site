import heroImage from "../assets/financing.png"

export const financingHero = {
  eyebrow: "Financing",

  title: "Flexible financing options for your roofing project",

  description:

    "A new roof is a major investment. Financing can help make your project more manageable with affordable monthly payment options and a simple online application process.",

  backgroundImage: heroImage,

  actions: [
    {
      label: "Apply Now",
      href: "/coming-soon",
      variant: "primary" as const,
    },
    {
      label: "Learn How It Works",
      href: "#how-it-works",
      variant: "secondary" as const,
    },
  ],
};
