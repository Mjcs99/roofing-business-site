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

export const financingHeroContentCards = {
  className: "financing-highlight",
  items: [
    {
      title: "Roof replacement from $129/month*",
      description:
        "Financing options may be available to help spread project costs over time.",
    },
  ]
}

export const howItWorksSection = {
  label: "How Financing Works", 
  title: "A simple way to move forward sooner", 
  description: "Financing can help you complete important roofing work without delaying the project while you save the full amount upfront.",
  reveal: true
}

export const howItWorksContentCards = { 
    className: "finance-steps-grid",
    items: [
    {
      badge: "1",
      title: "Review your project",
      description:
        "We discuss the scope of your roofing or exterior work and help you understand the expected cost.",
    },
    {
      badge: "2",
      title: "Apply online",
      description:
        "Complete a quick financing application through our financing partner using their secure online form.",
    },
    {
      badge: "3",
      title: "Review available options",
      description:
        "If approved, you can review the payment options available to you and choose what works best for your budget.",
    },
    {
      badge: "4",
      title: "Start your project",
      description:
        "Move forward with the work you need while paying over time according to your financing agreement.",
    },
  ]
};

export const financingBenefitsSection = {
  label: "Why Homeowners Use Financing",
  title: "More flexibility, less delay",
  description:
    "Financing gives homeowners a way to move ahead with repairs, replacements, and exterior upgrades without putting off important work that protects the home.",
  light: true,
};

export const financingBenefitsContentCards = {
  className: "finance-steps-grid financing-benefits-grid",
  items: [
    {
      description: "Spread costs into monthly payments",
    },
    {
      description: "Start urgent roofing work sooner",
    },
    {
      description: "Keep savings available for other needs",
    },
    {
      description: "Simple online application process",
    },
    {
      description: "Flexible options may be available",
    },
    {
      description: "Get the work done now without waiting or compromising on quality" 
    }
  ],
};

export const financingFaqSection = {
  label: "Frequently Asked Questions",
  title: "Common financing questions",
}
export const financingFaqContentCards = {
  className: "finance-steps-grid finance-faq-grid",
  items: [
    {
      title: "Does applying affect my ability to get a quote?",
      description:
        "No. You can still request a quote and discuss your project before deciding whether financing is right for you.",
    },
    {
      title: "How do I apply?",
      description:
        "You apply directly through our financing partner using the secure application link on this page.",
    },
    {
      title: "Can I finance repairs as well as replacements?",
      description:
        "In many cases financing can be used for a range of roofing and exterior projects, depending on the provider and approval terms.",
    },
    {
      title: "Who decides approval and terms?",
      description:
        "Approval, rates, and payment terms are determined by the third-party financing provider, not by our company.",
    },
  ],
};