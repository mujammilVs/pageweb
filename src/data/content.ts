import { ServiceCard, ProductCard, TeamMember, HeroSlide } from "../types";
import map from "../../src/assets/page-images/map-pin.svg";
import page1 from "../../src/assets/page-images/page-solutions-limited.webp";
import page2 from "../../src/assets/page-images/page-solutions-pvt-ltd.webp";
import page3 from "../../src/assets/page-images/page-technologies-LLC-1.webp";
import page4 from "../../src/assets/page-images/page-solutions-international-inc.webp";
import page5 from "../../src/assets/page-images/page-asiatech.webp";
import page6 from "../../src/assets/page-images/page-worldwide-inc.webp";
import info1 from "../../src/assets/page-images/info-1.png";
import info2 from "../../src/assets/page-images/info-2.png";
import info3 from "../../src/assets/page-images/info-3.png";
import team2 from "../../src/assets/page-images/sridhar-ceo.webp";
import team3 from "../../src/assets/page-images/krishna-member.webp";
import banner1 from "../assets/page-images/arab1.jpg";
import banner2 from "../assets/page-images/arab2.jpg";
import banner3 from "../assets/page-images/arab3.jpg";
import banner4 from "../assets/page-images/arab4.jpg";
import product1 from "../assets/page-images/product1.jpeg";
import product2 from "../assets/page-images/product2.webp";

import sample1 from "../assets/page-images/arab3.jpg";
export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "With A Digital First Approach",
    subtitle: "REIMAGINE BANKING",
    description:
      "Empowering businesses with cutting-edge digital solutions and strategic transformation consulting for the modern era.",
    image: banner1,
    cta: {
      text: "CONSULT NOW",
      href: "/contact",
    },
  },
  {
    id: "2",
    title: "Platform Modernozation To Propell You Forward",
    subtitle: "MODERNIZE WHILE YOU ACCELERATE",
    description:
      "Revolutionizing business operations with secure, scalable, and innovative digital platforms.",
    image: banner2,
    cta: {
      text: "CONSULT NOW",
      href: "/services",
    },
  },
  {
    id: "3",
    title: "Focusing On The Future Of Banking",
    subtitle: "CORE TO DIGITAL TO COMPOSABLE BANKING",
    description:
      "Building robust, scalable applications with cutting-edge cloud technologies and industry best practices.",
    image: banner3,
    cta: {
      text: "CONSULT NOW",
      href: "/products",
    },
  },
  {
    id: "4",
    title: "Empower Your Workflow | Secure",
    subtitle: "TRANSFORM FOR TOMORROW",
    description:
      "Building robust, scalable applications with cutting-edge cloud technologies and industry best practices.",
    image: banner4,
    cta: {
      text: "CONSULT NOW",
      href: "/products",
    },
  },
];

export const services: ServiceCard[] = [
  {
    id: "1",
    title: "Transformation Consulting",
    description:
      "Strategic guidance for digital transformation initiatives and organizational change.",
    icon: "TrendingUp",
    features: [
      "Strategic Planning",
      "Change Management",
      "Technology Assessment",
      "Implementation Roadmap",
    ],
    path: "/services/transformation-consulting",
  },
  {
    id: "2",
    title: "Core Platform Modernization",
    description:
      "Modernize legacy systems with cutting-edge technologies and architectures.",
    icon: "RefreshCw",
    features: [
      "Legacy System Migration",
      "API Integration",
      "Performance Optimization",
      "Security Enhancement",
    ],
    path: "/services/core-platform-modernization",
  },
  {
    id: "3",
    title: "Digital Banking Services",
    description:
      "Complete digital banking solutions for modern financial institutions.",
    icon: "CreditCard",
    features: [
      "Mobile Banking",
      "Payment Processing",
      "Risk Management",
      "Compliance Solutions",
    ],
    path: "/services/digital-banking",
  },
  {
    id: "4",
    title: "Banking Cloud Services",
    description:
      "Secure, scalable cloud infrastructure for banking and financial services.",
    icon: "Cloud",
    features: [
      "Cloud Migration",
      "Security & Compliance",
      "Disaster Recovery",
      "Cost Optimization",
    ],
    path: "/services/banking-cloud",
  },
];

export const products: ProductCard[] = [
  {
    id: "1",
    name: "Digifabric.ai",
    description:
      "AI-powered digital transformation platform that automates complex business processes.",
    features: [
      "AI/ML Integration",
      "Process Automation",
      "Real-time Analytics",
      "Scalable Architecture",
    ],
    image: product1,
  },

  {
    id: "2",
    name: "Digidox",
    description:
      "Intelligent document management system with advanced OCR and workflow capabilities.",
    features: [
      "Document Processing",
      "OCR Technology",
      "Workflow Automation",
      "Secure Storage",
    ],
    image: product2,
  },
  {
    id: "3",
    name: "Figiflo",
    description:
      "Visual workflow designer for creating and managing complex business processes.",
    features: [
      "Visual Designer",
      "Process Mapping",
      "Integration Hub",
      "Performance Monitoring",
    ],
    image: product1,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mr. Sridhar Dasari",
    role: "Cheif Operating Officer & Founder",
    bio: "Technology architect specializing in cloud-native solutions and enterprise systems.",
    image: team2,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "2",
    name: "Mr. Krishna Dasari",
    role: "Board Member",
    bio: "Product strategist with expertise in AI/ML and user experience design.",
    image: team3,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

// export const partners = [
//   {
//     name: "Microsoft",
//     logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     name: "AWS",
//     logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     name: "Google Cloud",
//     logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     name: "IBM",
//     logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     name: "Oracle",
//     logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     name: "Salesforce",
//     logo: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
// ];

export const accomplishments = [
  {
    id: "1",
    year: "2020",
    title: "PAGE Solutions Founded",
    description:
      "Started our journey with a vision to provide advantage digital solutions.",
  },
  {
    id: "2",
    year: "2021",
    title: "First Major Client",
    description:
      "Successfully delivered digital transformation for a Fortune 500 company.",
  },
  {
    id: "3",
    year: "2022",
    title: "Product Launch",
    description: "Launched Digifabric.ai, our flagship AI-powered platform.",
  },
  {
    id: "4",
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to serve clients across 3 continents.",
  },
  {
    id: "5",
    year: "2024",
    title: "Innovation Award",
    description: 'Recognized as "Digital Innovation Company of the Year".',
  },
];

export const connectus = [
  {
    id: "1",
    logo: map,
    from: "India",
    address:
      "Plot No. 815, B.V.L Complex, 4th Street, Sri Swamy Ayyappa Society, Madhapur, Hyderabad - 500081",
  },
  {
    id: "2",
    logo: map,
    from: "UAE",
    address:
      "Office 1505, 15th Floor, Barjuman Business Towers, Sheikh Zayed Street, Al Mankhool - Dubai, UAE",
  },

  {
    id: "3",
    logo: map,
    from: "Canada",
    address: "55 Chevron Crescent, Toronto M1K 3N6",
  },
  {
    id: "4",
    logo: map,
    from: "Singapore",
    address:
      "Page Solutions Pte Ltd Hengda Building, 137 Cecil Street, #10-07, Postal 069537",
  },
  {
    id: "5",
    logo: map,
    from: "UK",
    address:
      "No.424, Legacy Centre Hanworth Trading Estate Feltham, TW 13 6th London (Registered Office)",
  },
];

export const locateus = [
  {
    id: 1,
    logo: page1,
    address:
      "Registered Office : No.424, Legacy Centre Hanworth Trading Estate Feltham, TW 13 6th London",
  },
  {
    id: 2,
    logo: page2,
    address:
      "Operational Head office : Plot No. 815, B.V.L Complex 4th Street, Sri Swamy Ayyappa Society Madhapur, Hyderabad – 500081",
  },

  {
    id: 3,
    logo: page3,
    address:
      "1505, 15th Floor, Barjuman Business Towers, Sheikh Zayed Street, Al Mankhool,Dubai,UAE",
  },

  {
    id: 4,
    logo: page4,
    address: "55 Chevron Crescent,Toronto M1K 3N6",
  },
  {
    id: 5,
    logo: page5,
    address: "Hengda Building, 137 Cecil Street, #10-07, Postal 069537",
  },
  {
    id: 6,
    logo: page6,
    address: "1300 N CUSTER RD APT # 6203 ALLEN TX 75013-3516",
  },
];

export const aboutus1 = [
  {
    logo: info1,
    description:
      "During these years we have worked with 110+ banks and financial institutions around the globe and have delivered value along their transformation journeys.",
  },
  {
    logo: info2,
    description:
      "Throughout our years of operation, we have held a Hyper-Focus on Banking Technology and Transformation both on Core Platforms and Ancillary Banking applications. Our approach to delivering efficient and effective Technology Enabled Banking Services is a unique blend of Digital adaptation and business transformation.",
  },
  {
    logo: info3,
    description:
      "We continuously strive to be an IT services company using the power of technology to build better banks & Financial Institutions, that focus on the future. Institutions that strive to exceed their customer’s expectations.",
  },
];

export const tabs = [
  {
    title: "Right STRATEGY",
    heading: "Banking Transformation STRATEGY",
    description: `The questions we address for our clients in this process are:

Ascertaining the current position, status, and readiness of people, processes, and systems will drive future STRATEGY. Developing a tailor-made strategic plan, obtaining stakeholder buy-in and executive commitment is critical at this stage. Page Solutions works closely with stakeholders to drive this initiative. We deliver client-centric assessment and current state analysis which coupled with current industry trends enables us to deliver a strategy that builds on growth levers and innovation.`,
    img: sample1,
  },
  {
    title: "Efficient PROCESSES",
    heading: "Efficient Operational Processes",
    description: "Content for efficient processes...",
    img: sample1,
  },
  {
    title: "Scalable SOLUTIONS",
    heading: "Scalable Business Solutions",
    description: "Content for scalable solutions...",
    img: sample1,
  },
  {
    title: "Transparent GOVERNANCE",
    heading: "Transparent Governance Models",
    description: "Content for transparent governance...",
    img: sample1,
  },
];
