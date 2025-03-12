import React from "react";
import PagesLayout from "../layout/PagesLayout";
import FilterSidebar from "../components/Filter";

const Books = () => {
  return (
    <PagesLayout>
      <div>Books
        <FilterSidebar/>
      </div>
    </PagesLayout>
  );
};

export default Books;
