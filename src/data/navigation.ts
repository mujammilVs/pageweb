import { NavItem } from "../types";
import product1 from "../assets/page-images/digidox.webp";
import product2 from "../assets/page-images/digifabricai.webp";
import product3 from "../assets/page-images/digiflo.webp";

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
    subItems: [
      {
        label: product1,
        href: "/products/digifabric",
      },
      {
        label: product2,
        href: "/products/digidox",
      },
      {
        label: product3,
        href: "/products/figiflo",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subItems: [
      {
        label: "Transformation Consulting",
        href: "/services/transformation-consulting",
      },
      {
        label: "Core Platform Modernization",
        href: "/services/core-platform-modernization",
      },
      {
        label: "Digital Banking Services",
        href: "/services/digital-banking",
      },
      {
        label: "Banking Cloud Services",
        href: "/services/banking-cloud",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
