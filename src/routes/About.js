import React from "react";
import Benefits from "../components/About/Benefits";
import Hero from "../components/About/Hero";
import JoinUs from "../components/About/JoinUs";
import Mission from "../components/About/Mission";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function About() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <Mission />
        <Benefits />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}

export default About;
