import React from "react";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import CourseOutline from "../../components/Stack/CourseOutline";
import Gain from "../../components/Stack/Gain";
import Hero from "../../components/Stack/Hero";
import Instructors from "../../components/Stack/Instructors";
import What from "../../components/Stack/What";
import Head from "next/head";

function UIUX() {
  const what = [
    [
      {
        text: "UI stands for the user interface while UX stands for user experience. In most cases, terms have been used interchangeably during conversations but you have to know that they are quite different from one another and serve different purposes but they have to work closely together in other to achieve a good user experience and user interface😏 see what I did there?",
      },
      {
        text: "UI design is the process of creating the look and feel of an application(web or mobile) it focuses on the appearance of the application to the user's eye. The UI design field involves planning, creating, and improving the user interaction with the layout of an application or website. As a designer, your job is to plan, design, and create user interface elements.",
      },
      {
        text: "UX design brings to summary the complete user experience while using the provided interface of the application and concludes on how well the user is able to navigate and interact with the website layout without difficulty.",
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
      hd: " Collaborate with other designers",
      text: "RUN Tech Space gives you an oppurtunity to work with other designers on various projects.",
    },
    {
      img: "/images/uiux/gain3.svg",
      hd: "   Access to premium content",
      text: "",
    },
    {
      img: "/images/uiux/gain4.svg",
      hd: "Hands-on-learning",
      text: "During the duration of the course you as a designer would work on projects, you won't feel felt out.",
    },
  ];

  const outline = [
    "Introduction to UI/UX",
    "Refactoring UI brush up",
    "Introduction to Figma",
    "Advanced Figma: Learning component, auto layout and variants.",
    "Google UX Course: Foundation of User Experience (UX) Design Review.",
    "Google UX Course: Empathize, Deﬁne and Ideate Review",
    "Google UX Course: Build Wireframes and Low-Fidelity Prototypes Review",
    "Google UX Course: Conduct UX Research and Test Early Concept Review",
    "Google UX Course: Create High-FIdelity Designs and Prototypes in Figma Review",
  ];
  return (
    <>
      <Head>
        <title>UI & UI Design - RUN Tech Space</title>
      </Head>

      <Navigation />
      <Hero heading='UI & UX Design' link='/join_us' />
      <main className='space-y-20'>
        <Instructors uiux />
        <What heading='UI & UX Design' what={what[0]} />
        <Gain gain={gain} />
        <CourseOutline outline={outline} />
      </main>
      <Footer />
    </>
  );
}

export default UIUX;
