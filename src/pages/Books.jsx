import React from "react";
import PagesLayout from "../layout/PagesLayout";
import FilterSidebar from "../components/Filter";
import ContactForm from "../components/ContactForm";

const Books = () => {
  return (
    <PagesLayout>
      <div>Books
        <FilterSidebar/>
        <ContactForm />
      </div>
    </PagesLayout>
  );
};

export default Books;
