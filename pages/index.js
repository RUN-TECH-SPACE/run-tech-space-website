import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Events from "../components/Home/Events";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import Partners from "../components/Home/Partners";
import Stacks from "../components/Home/Stacks";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <>
      <Head>
        <title>RUN Tech Space</title>
        <meta
          name='description'
          content='Providing students the ability to think creatively and build
            innovative solutions to global problems'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <Hero />
      <main>
        <Partners />
        <Stacks />
        <Events />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default Home;
