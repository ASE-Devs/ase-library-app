import React from "react";
import PagesLayout from "../layout/PagesLayout";
import FilterSidebar from "../components/Filter";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";

const Books = () => {
  const num = [1, 2, 3,]
  return (
    <PagesLayout>
      <div>
        <HeroSection />
        <div>
          <FilterSidebar />

        </div>
        <ContactForm />
      </div>
    </PagesLayout>
  );
};

export default Books;
