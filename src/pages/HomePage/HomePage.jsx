import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import AboutSection from "../../components/AboutSection/AboutSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      {/* New About Section rendered here */}
      <AboutSection />

      {/* Placeholder for future sections */}
      <div style={{ padding: "50px", textAlign: "center", color: "#666" }}>
        <p>More sections coming soon...</p>
      </div>
    </div>
  );
};

export default HomePage;
