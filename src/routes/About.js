import React from "react";
import Benefits from "../components/About/Benefits";
import Hero from "../components/About/Hero";
import JoinUs from "../components/About/JoinUs";
import Mission from "../components/About/Mission";

function About() {
  return (
    <>
      <Hero />
      <main>
        <Mission />
        <Benefits />
        <JoinUs />
      </main>
    </>
  );
}

export default About;
