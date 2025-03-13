import React from "react";
import PagesLayout from "../layout/PagesLayout";
import Newsletter from "../components/Newsletter";
import Bookcard from "../components/Bookcard";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import image from '../assets/images/another.jpg'

const LandingPage = () => {
  return (

    <PagesLayout>

      <HeroSection image={image} title={"A library is a place where you can lose your innocence without losing your virginity."} subtitle={'Germaine Greer'} buttonText={'Browse More'} />
      <div className="flex gap-6 p-20 flex-wrap ">
        {arr.map((ar) =>
          <Bookcard key={ar} />
        )}
      </div>
      <Newsletter />

    </PagesLayout>
  );
};

export default LandingPage;
