import React from "react";
import PagesLayout from "../layout/PagesLayout";
import Newsletter from "../components/Newsletter";
import Bookcard from "../components/Bookcard";


const Landing = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <PagesLayout>
      <div>Landing</div>
      <Newsletter />
      <div className="flex gap-3 p-20">
        {arr.map((ar) =>
          <Bookcard key={ar} />
        )}
      </div>


    </PagesLayout>

  );
};

export default Landing;
