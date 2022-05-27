import React from "react";
import Head from "next/head";
import Navigation from "../../components/Navigation";
import Hero from "../../components/Stack/Hero";
import What from "../../components/Stack/What";
import Footer from "../../components/Footer";
import CourseOutline from "../../components/Stack/CourseOutline";
import Gain from "../../components/Stack/Gain";

function ArtificialIntelligence() {
  return (
    <>
      <Head>
        <title>UI & UI Design - RUN Tech Space</title>
      </Head>

      <Navigation />
      <Hero heading='Artificial Intelligence & Data Science' link='/join_us' />
      <main className='space-y-20'>
        {/* <Instructors /> */}
        {/* <What what={what[0]} />
        <Gain gain={gain} /> */}
        {/* <CourseOutline /> */}
      </main>
      <Footer />
    </>
  );
}

export default ArtificialIntelligence;
