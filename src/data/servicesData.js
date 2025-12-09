import {
  Shield,
  Home,
  Phone,
  Wrench,
  Users,
  Flame,
  Dog,
  Camera,
  Coins,
  FileSearch,
  Coffee,
  Flower,
} from "lucide-react";

export const servicesData = [
  {
    id: "security-services",
    title: "Security Services",
    // Short description for the Main Page
    description:
      "Manned guarding, armed security, and corporate protection services tailored to your needs.",
    image: "/images/professionalsecurityservices/1.webp",
    link: "/service/security-services",
    // Extended details for the Slug Page
    fullDesc:
      "Our Security Services form the backbone of our operations. We provide comprehensive manned guarding solutions tailored to the specific needs of corporate offices, industrial plants, and residential complexes. Our guards are trained professionals capable of handling access control and emergency response.",
    features: [
      "24/7 Manned Guarding",
      "Armed & Unarmed Security",
      "Access Control",
      "Visitor Management",
    ],
  },
  {
    id: "house-keeping",
    title: "House Keeping",
    description:
      "Professional cleaning and facility maintenance ensuring a hygienic and organized environment.",
    image: "/images/professionalsecurityservices/2.webp",
    link: "/service/house-keeping",
    fullDesc:
      "Cleanliness is essential for a productive workspace. Our Housekeeping services utilize modern equipment and eco-friendly cleaning agents to maintain the highest standards of hygiene in hospitals, hotels, and offices.",
    features: [
      "Daily Office Cleaning",
      "Washroom Hygiene",
      "Floor Polishing",
      "Waste Disposal",
    ],
  },
  {
    id: "help-desk-service",
    title: "Help Desk Service",
    description:
      "Efficient front-office management and concierge services to handle your visitors and calls.",
    image: "/images/professionalsecurityservices/3.webp",
    link: "/service/help-desk-service",
    fullDesc:
      "Your front desk is the face of your organization. Our Help Desk professionals are trained in soft skills, etiquette, and visitor management software to ensure every guest is greeted with a smile.",
    features: [
      "Visitor Management",
      "Call Routing",
      "Mailroom Operations",
      "Concierge Services",
    ],
  },
  {
    id: "technical-services",
    title: "Technical Services",
    description:
      "Expert plumbing, electrical, and maintenance solutions for uninterrupted operations.",
    image: "/images/professionalsecurityservices/4.webp",
    link: "/service/technical-services",
    fullDesc:
      "Facilities require constant maintenance. Our Technical Services division provides skilled electricians, plumbers, and HVAC technicians to prevent breakdowns and ensure your infrastructure is always operational.",
    features: [
      "Electrical Maintenance",
      "Plumbing",
      "HVAC Repair",
      "DG Set Operation",
    ],
  },
  {
    id: "event-security",
    title: "Event Security",
    description:
      "Crowd management and VIP protection for corporate events, concerts, and private functions.",
    image: "/images/professionalsecurityservices/5.webp",
    link: "/service/event-security",
    fullDesc:
      "Events bring crowds and risks. We specialize in securing large-scale events, weddings, and galas using pre-event risk assessment and crowd flow management protocols.",
    features: [
      "Crowd Control",
      "VIP Protection",
      "Bouncers",
      "Emergency Planning",
    ],
  },
  {
    id: "fire-safety",
    title: "Fire Safety",
    description:
      "Certified fire safety officers and audit services to ensure your premises are compliant and safe.",
    image: "/images/professionalsecurityservices/6.webp",
    link: "/service/fire-safety",
    fullDesc:
      "Fire prevention is better than fighting a fire. Our certified Fire Safety Officers conduct audits, maintain equipment, and train your staff in evacuation drills.",
    features: [
      "Extinguisher Maintenance",
      "Mock Drills",
      "Fire Audits",
      "Emergency Response",
    ],
  },
  {
    id: "dog-squad",
    title: "Dog Squad",
    description:
      "Highly trained K9 units for detection, tracking, and patrolling high-risk perimeters.",
    image: "/images/professionalsecurityservices/7.webp",
    link: "/service/dog-squad",
    fullDesc:
      "For high-security zones, nothing beats a trained K9. Our Dog Squad features expert breeds handled by certified trainers, effective for patrolling and explosives detection.",
    features: [
      "Perimeter Patrolling",
      "Explosives Detection",
      "Narcotics Tracking",
      "Certified Handlers",
    ],
  },
  {
    id: "electronic-surveillance",
    title: "Electronic Surveillance",
    description:
      "CCTV monitoring and advanced access control systems for 24/7 digital security.",
    image: "/images/professionalsecurityservices/8.webp",
    link: "/service/electronic-surveillance",
    fullDesc:
      "Technology is a force multiplier. We install and monitor advanced CCTV systems and biometric access controls, ensuring rapid response to any suspicious activity via our command center.",
    features: [
      "CCTV Monitoring",
      "Biometric Access",
      "Intrusion Alarms",
      "Remote Command Center",
    ],
  },
  {
    id: "cash-management",
    title: "Cash Management",
    description:
      "Secure logistics for cash-in-transit and ATM replenishment services.",
    image: "/images/professionalsecurityservices/9.webp",
    link: "/service/cash-management",
    fullDesc:
      "Transporting high-value assets requires absolute trust. We provide secure logistics for banks and retail chains using GPS-tracked armored vehicles and armed guards.",
    features: [
      "Cash-in-Transit",
      "ATM Replenishment",
      "Vaulting Services",
      "Bullion Transport",
    ],
  },
  {
    id: "investigation-services",
    title: "Investigation Services",
    description:
      "Corporate fraud investigation, background verification, and risk assessment.",
    image: "/images/professionalsecurityservices/10.webp",
    link: "/service/investigation-services",
    fullDesc:
      "Information is power. Our private investigation wing handles corporate fraud cases and employee background verifications with utmost confidentiality to mitigate business risks.",
    features: [
      "Background Verification",
      "Fraud Investigation",
      "Undercover Ops",
      "Surveillance",
    ],
  },
  {
    id: "pantry-services",
    title: "Pantry Services",
    description:
      "Hygiene-focused pantry management and hospitality staff for corporate offices.",
    image: "/images/professionalsecurityservices/11.webp",
    link: "/service/pantry-services",
    fullDesc:
      "A well-managed pantry keeps a workforce happy. Our staff is trained in hygiene and service etiquette to manage corporate cafeterias and executive dining rooms.",
    features: [
      "Pantry Management",
      "Beverage Service",
      "Hospitality Staff",
      "Hygiene Compliance",
    ],
  },
  {
    id: "garden-maintenance",
    title: "Garden Maintenance",
    description:
      "Landscaping and gardening services to keep your premises green and welcoming.",
    image: "/images/professionalsecurityservices/12.webp",
    link: "/service/garden-maintenance",
    fullDesc:
      "A green environment enhances well-being. Our expert gardeners maintain your lawns and indoor plants, handling mowing, pruning, and pest control year-round.",
    features: [
      "Landscape Design",
      "Lawn Mowing",
      "Indoor Plant Care",
      "Irrigation Management",
    ],
  },
];
