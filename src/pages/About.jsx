import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import AboutHero from "../components/about/AboutHero.jsx";
import CompanyInfo from "../components/about/CompanyInfo.jsx";
import WhyChooseUs from "../components/about/WhyChooseUs.jsx";

import Statistics from "../components/about/Statistics.jsx";
import Process from "../components/about/Process.jsx";
import Team from "../components/about/Team.jsx";

function About() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <AboutHero />

        <CompanyInfo />

        <WhyChooseUs />

        <Statistics />

        <Process />

        <Team />
      </main>

      <Footer />
    </>
  );
}

export default About;
