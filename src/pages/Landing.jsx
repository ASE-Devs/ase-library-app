import React from "react";
import PagesLayout from "../layout/PagesLayout";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";


const Landing = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <PagesLayout>
      {/* Props for Hero-Section with Button */}
      <HeroSection
        title="Discover Books That Read"
        subtitle="Great reading experience"
        image={HeroImage}
        buttonText="Browse Now"
      />

    </PagesLayout>
  );
};

export default Landing;




