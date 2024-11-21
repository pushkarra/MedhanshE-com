import React from "react";
import HeroSection from "./components/HeroSection";
import ProductCarousel from './components/ProductCarousel';
import FeatureProducts from './components/FeatureProducts';
import CompactProductCarousel from './components/CompactProductCarousel';
import Services from "./components/Services";
import QRCodeDownload from './components/QRCodeDownload';
import Footer from "./components/Footer";

const Home = () => {
  const data = {
    name: "First Electronics Solutions",
  };

  return (
    <>
      <HeroSection myData={data} />
      <ProductCarousel />
      <FeatureProducts />
      <CompactProductCarousel />
      <Services />
      <QRCodeDownload />
      <Footer />
    </>
  );
};

export default Home;