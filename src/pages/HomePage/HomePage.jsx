import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProfessionalServices from "../../components/ProfessionalServices/ProfessionalServices";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
// Import the new Testimonials
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProfessionalServices />
      <WhyChooseUs />

      {/* New Testimonials Section */}
      <Testimonials />

      <div style={{ padding: "50px", textAlign: "center", color: "#666" }}>
        <p>More sections coming soon...</p>
      </div>
    </div>
  );
};

export default HomePage;
