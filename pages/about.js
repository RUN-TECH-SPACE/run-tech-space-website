import Head from "next/head";
import Benefits from "../components/About/Benefits";
import Hero from "../components/About/Hero";
import JoinUs from "../components/About/JoinUs";
import Mission from "../components/About/Mission";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function About() {
  const community = [
    "1.	RUN tech space will provide members with a space where they express their creativity freely.",
    "2.	RUN tech space will assist members in improving their problem solving skills.",
    "3.	RUN tech space will assist its members in gaining real-world experience and recognition in the creative industry.",
    "4.	RUN tech space will assist its members in developing effective communication skills and the ability to work in teams.",
    "5.	RUN tech space will assist its members in focusing on their careers.",
  ];

  const run = [
    "1.	RUN tech space will boost the image of Redeemer's University by competing in Tech competition both locally and internationally.",
    "2.	RUN tech space will help Redeemer's university, Nigeria and probably the world with her projects and help bring solutions to some of her problems.",
    "3.	RUN tech space will portray Redeemer's university as one of the universities at the frontline of technological advancement in Nigeria.",
    "4.	RUN tech space will portray Redeemer's university as the home of creativity and innovation in Africa.",
    "5.	RUN tech space will help Redeemer's university students get grants and awards.",
  ];

  return (
    <>
      <Head>
        <title>About - RUN Tech Space</title>
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
        <Mission />
        <Benefits
          heading='Benefits of RUN Tech Space to Redeemer’s University'
          data={community}
        />
        <Benefits
          heading='Benefits of RUN Tech Space to members of her community '
          data={run}
        />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}

export default About;
