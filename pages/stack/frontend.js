import React from "react";
import Navigation from "../../components/Navigation";
import Head from "next/head";
import What from "../../components/Stack/What";
import Gain from "../../components/Stack/Gain";
import CourseOutline from "../../components/Stack/CourseOutline";

function Frontend() {
  return (
    <>
      <Head>
        <title>Frontend - RUN Tech Space</title>
      </Head>
      <Navigation />
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

export default Frontend;
