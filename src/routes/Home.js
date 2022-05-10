import React from "react";
import Footer from "../components/Footer";
import Events from "../components/Home/Events";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import Stacks from "../components/Home/Stacks";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <Partners />
        <Stacks />
        <Events />
      </main>
      <Footer />
    </>
  );
}

export default Home;
