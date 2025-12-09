import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import ProfessionalServices from "../../components/ProfessionalServices/ProfessionalServices";
import ServiceCarousel from "../../components/ServiceCarousel/ServiceCarousel";
import ImageMarquee from "../../components/ImageMarquee/ImageMarquee";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQSection from "../../components/FAQSection/FAQSection";
import ConnectToUs from "../../components/ConnectToUs/ConnectToUs";

// 1. Import the Clients Section
import ClientsSection from "../../components/ClientsSection/ClientsSection"; // ✅ NEW

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ProfessionalServices />
      <ServiceCarousel />

      <WhyChooseUs />

      {/* 2. Add Clients Section here (e.g., before Testimonials) */}
      <ClientsSection />

      <Testimonials />
      <FAQSection />
      <ImageMarquee />
      <ConnectToUs />
    </div>
  );
};

export default HomePage;
