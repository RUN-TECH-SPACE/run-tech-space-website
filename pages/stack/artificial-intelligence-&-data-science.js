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
      <Hero
        heading='Artificial Intelligence & Data Science'
        description="Every day, businesses utilize data and analytics to improve efficiencies, gain deeper operational insights, and ultimately earn more money. However, data science's significance extends far beyond the commercial world and is assisting in the resolution of some of humanity's most serious problems. Data science is being used for the better welfare of society, from helping health practitioners address problems more intelligently to fighting poverty, mitigating climate change, solving transportation issues, and lots more. Artificial Intelligence impacts our lives and the world around us."
        link='/join_us'
        img='/images/ai.png'
        ai
      />
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
