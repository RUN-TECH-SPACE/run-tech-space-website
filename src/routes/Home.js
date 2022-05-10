import React from "react";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import Stacks from "../components/Home/Stacks";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main className='container'>
        <Partners />
        <Stacks />
      </main>
    </>
  );
}

export default Home;
