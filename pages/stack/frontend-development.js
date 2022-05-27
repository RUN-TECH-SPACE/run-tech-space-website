import React from "react";
import Navigation from "../../components/Navigation";
import Head from "next/head";
import What from "../../components/Stack/What";
import Gain from "../../components/Stack/Gain";
import CourseOutline from "../../components/Stack/CourseOutline";
import Footer from "../../components/Footer";
import Hero from "../../components/Stack/Hero";
import Instructors from "../../components/Stack/Instructors";

function Frontend() {
  const what = [
    [
      {
        text: "Front-End Development also called Web Design is the development of the graphical user interface (GUI) of a website, as for users to view and interact with that website.",
      },
      {
        text: "Basically, everything you see on the view of your browser has to do with the Front-end of the website. To create the front-end, developers make use the combination of HTML (for basic page structure and content), CSS (for visual editing), and JavaScript (for making websites interactive).",
      },
    ],
  ];
   const gain = [
    {
      img: "/images/uiux/gain1.svg",
      hd: "Build your portfolio",
      text: "By the end of the course you'll have an online portfolio to show an intending client, which could stand as a resume.",
    },
    {
      img: "/images/uiux/gain2.svg",
      hd: " Collaborate with other's while building a project",
      text: "This is a good skill to have, and RUN Tech space gives you an oppurtunity to work along others on various projects.",
    },
    {
      img: "/images/uiux/gain3.svg",
      hd: "Learn fundamental technologies, that will help you advance",
      text: "With the fundamentals you need, in no time, you'll be able to build what you set your mind to",
    },
    {
      img: "/images/uiux/gain4.svg",
      hd: "Hands-on-learning",
      text: "Several challenges will be given for you to solve, pratice makes perfect",
    },
  ];

  // const outline = [
  //   "How the internet works", 
  //   ""
  // ]
  return (
    <>
      <Head>
        <title>Frontend - RUN Tech Space</title>
      </Head>
      <Navigation />
      <Hero heading="Frontend Development" description="If you're curious to know how the internet works along with how websites are made, then this stack got your back. You'll learn the fundamentals that'll help you in the long run as you pursuit this skill to become a Frontend Developer." link='/join_us' />
      <main className='space-y-20'>
        <Instructors frontend />
        <What heading='Frontend Development' what={what[0]} />
        <Gain gain={gain} />
        {/* <CourseOutline outline={outline} /> */}
      </main>
      <Footer />
    </>
  );
}

export default Frontend;
