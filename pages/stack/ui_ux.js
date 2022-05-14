import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import CourseOutline from "../../components/Stack/CourseOutline";
import Gain from "../../components/Stack/Gain";
import Hero from "../../components/Stack/Hero";
import Instructors from "../../components/Stack/Instructors";
import What from "../../components/Stack/What";

function UIUX() {
  return (
    <>
      <Navigation />
      <Hero />
      <main className='space-y-20'>
        {/* <Instructors /> */}
        <What />
        <Gain />
        <CourseOutline />
      </main>
      <Footer />
    </>
  );
}

export default UIUX;
