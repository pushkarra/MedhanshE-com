import React from "react";
import HeroSection from "./components/HeroSection";
import FeatureProducts from './components/FeatureProducts';
import SlickCarousel from './slick/SlickCarousel';
import Footer from "./components/Footer";

const Home = () => {
  const data = {
    name: "First Electronics Solutions",
  };

  return (
    <>
      <HeroSection myData={data} />
      <SlickCarousel />
      <FeatureProducts />
      <Footer />
    </>
  );
};

export default Home;