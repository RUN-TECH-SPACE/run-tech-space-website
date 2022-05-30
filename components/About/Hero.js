import Image from "next/image";
import React from "react";
import  AboutImage  from "../../public/images/about-image.png"

function Hero() {
  return (
    <header className='container grid gap-3 py-20 md:grid-cols-2'>
      <div className='order-2 space-y-3 self-center md:order-1'>
        <h2 className='heading2 text-left'>What really is RUN Tech Space?</h2>
        <p className=' md:text-xl'>
          Run Tech Space, a short form for Redeemer's University Technology
          Space, is a creative environment for students to learn, brainstorm and
          innovate solutions to societal challenges.
        </p>
        <p className=' md:text-xl'>
          The purpose of RUN tech space is to provide a community where students
          are given the opportunity to learn, and gain real life experience in
          the technology world, also giving them the opportunity to meet and
          interact with industry leaders from around the world.
        </p>
      </div>

      {/* <AboutImage /> */}

      <Image src={AboutImage} objectFit className="order-1 justify-self-center md:order-2 md:justify-self-end" prioritys />

      {/* <img
        src='/images/heroBg.png'
        alt='banner'
        className='order-1 justify-self-center md:order-2 md:justify-self-end'
      /> */}
    </header>
  );
}

export default Hero;
