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

import asphaltRoofShingles from "../assets/services_photos/asphalt-roof-shingles.png"
import rubberRoofShingles from "../assets/services_photos/rubber-roof-shingles.png"
import metalRoofShingles from "../assets/services_photos/metal-roof-shingles.png"
  export const howToChooseContentCards = { 
    className: "how-to-choose-cards",
    items: [
      {
        image: asphaltRoofShingles,
        title: "Choose Asphalt If...",
        description:
          "You want a dependable, attractive roofing system with a lower upfront cost and a proven fit for standard residential sloped roofs.",
      },
      {
        image: metalRoofShingles,
        title: "Choose Metal If...",
        description:
          "You want a premium look, longer lifespan, and stronger long-term value, and you are comfortable with a higher upfront investment.",
      },
      {
        image: rubberRoofShingles,
        title: "Choose Rubber If...",
        description:
          "You want a tough, long-lasting roofing solution that handles hail, high winds, and extreme weather with minimal maintenance.",
      },
    ]};

export const browseServicesNavSection = {
  className: "services-anchor-nav-card",
  label: "Browse Services", 
  title: "Jump to the section you want", 
  reveal: true
}

export const materialComparisonSection = {
  label: "Roofing Options", 
  title: "Asphalt vs rubber vs metal: which roofing system is right for your home?", 
  description: "The best material depends on your roof design, budget, long-term goals, and how you want the finished result to look and perform.",
  reveal: true
}

export const howToChooseSection = {
  title: "Which roofing material should you choose?", 
  reveal: true
}

export const featuredServicesSection = {
  label: "Featured Services",
  title: "See the kinds of work we do",
  reveal: true
}

export const cleaningServicesSection = {
  label: "Cleaning Services", 
  title: "Roof, siding, cedar shake, and gutter cleaning", 
  description: "Cleaning isn’t just cosmetic. Removing buildup from your roof, siding, cedar shake, and gutters can help maintain the condition and appearance of your property.",
  reveal: true
}

export const ourProcessSection = {
  label: "Our Process", 
  title: "A simple, professional experience from start to finish", 
  reveal: true
}

export const servicesContactSection = {
  className: "services-contact-section",
  label: "Need Help Deciding?", 
  title: "We can help you choose the right roofing or exterior solution", 
  description: "Not sure whether asphalt, rubber, or metal is the better fit? Need repairs now but want to plan for a replacement later? We’ll walk you through your options and give you an honest recommendation.",
  reveal: true
}
import sidingRepairsImage from "../assets/services_photos/vinyl-siding-repairs.png"

export const sidingAndRepairsContentCards = {
  className: "featured-service-row",
  items: [
    {
      image: sidingRepairsImage,
    },
    {
      title: "Vinyl siding & repairs",
      description: "Siding does more than improve how your home looks. It also helps protect the structure from the elements. Repairing damaged siding or updating worn exterior finishes can improve curb appeal while helping the home stay better sealed and protected.",
      points: ["Replace cracked or damaged panels", "Improve exterior appearance", "Help protect against moisture and weather exposure"]  
    },
  ]
}


import soffitAndFasciaImage from "../assets/services_photos/soffit-fascia-replacement.webp"

export const soffitAndFasciaContentCards = {
  className: "featured-service-row",
  items: [
    {
      image: soffitAndFasciaImage,
    },
    {
      title: "Soffit & fascia replacement",
      description: "Your roofline needs more than shingles or metal panels to perform properly. Soffit and fascia support ventilation, help manage moisture, and create a clean finished edge around the roof. Replacing worn or damaged pieces can improve both function and appearance.",
      points: ["Better roofline appearance", "Improved ventilation support", "Protection against weather-related deterioration"]  
    },
  ]
}

import roofLeakImage from "../assets/services_photos/emergency-leaks-repairs.webp"

export const roofLeakRepairContentCards = {
  className: "featured-service-row",
  items: [
    {
      image: roofLeakImage,
    },
    {
      title: "Emergency leaks & repairs",
      description: "When water is getting in, speed matters. Fast repairs can help reduce damage to insulation, ceilings, drywall, and interior finishes. We help identify the source and address the issue before it gets worse.",
      points: ["Leak detection and repair", "Storm and weather-related repairs", "Prevent bigger damage and higher costs later"]  
    },
  ]
}

import roofCleaningImage from "../assets/services_photos/roof-cleaning.webp"
import sidingCleaningImage from "../assets/services_photos/siding-cleaning.webp"
import cedarCleaningImage from "../assets/services_photos/cedar-shake-cleaning.jpg"
import gutterCleaningImage from "../assets/services_photos/gutter.jpg"

export const cleaningServiesContentCards = {
  className: "cleaning-services-content-cards",
  items: [
    {
      image: roofCleaningImage,
      alt: "Roof cleaning service",
      title: "Roof Cleaning",
      description:
        "Remove debris and buildup that can trap moisture and leave your roof looking worn before its time.",
    },
    {
      image: sidingCleaningImage,
      alt: "Siding cleaning service",
      title: "Siding Cleaning",
      description:
        "Refresh the exterior of your home and restore cleaner curb appeal.",
    },
    {
      image: cedarCleaningImage,
      alt: "Cedar shake cleaning service",
      title: "Cedar Shake Cleaning",
      description:
        "Help preserve the appearance and condition of cedar by removing surface buildup.",
    },
    {
      image: gutterCleaningImage,
      alt: "Gutter cleaning service",
      title: "Gutter Cleaning",
      description:
        "Keep water flowing properly and reduce the risk of overflow and drainage issues.",
    },
  ]
};

export const ourProcessContentCards = {
  className: "cleaning-services-content-cards our-process-content-cards",
  items: [
    {
      title: "Consultation",
      description:
        "We talk through your project, concerns, goals, and budget.",
    },
    {
      title: "Inspection & Recommendation",
      description:
        "We assess the condition of the roof or exterior and recommend the most practical option for your property.",
    },
    {
      title: "Clear Estimate",
      description:
        "We provide a straightforward quote so you understand the scope of work and available options.",
    },
    {
      title: "Professional Work & Cleanup",
      description:
        "We complete the work with care, communication, and attention to site cleanliness.",
    },
  ]
};