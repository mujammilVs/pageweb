import React from "react";
import Hero from "../components/Hero";
import QuickLinks from "../components/QuickLinks";
import ServicesSection from "../components/ServicesSection";
import PartnersSection from "../components/PartnersSection";
import AccomplishmentsSection from "../components/AccomplishmentsSection";
import TeamSection from "../components/TeamSection";
import OurPartners from "../components/OurPartners";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickLinks />
      <ServicesSection />
      <PartnersSection />
      <AccomplishmentsSection />
      <OurPartners />
      <TeamSection />
    </div>
  );
};

export default Home;
