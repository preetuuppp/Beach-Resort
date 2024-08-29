import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeatcheredRooms from "../components/FeatcheredRooms";

const HomePage = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxuious rooms"
          subtitle="deluxe rooms starting at $299"
        />
        <Link to="/rooms" className="btn-primary" />
      </Hero>
      <Services />
      <FeatcheredRooms />
    </>
  );
};

export default HomePage;
