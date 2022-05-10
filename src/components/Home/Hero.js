import React from "react";
import Button from "../Button";

function Hero() {
  return (
    <header className='container grid gap-3 py-20 md:grid-cols-2'>
      <div className='order-2 self-center md:order-1'>
        <h1 className='text-3xl font-semibold md:text-4xl lg:text-6xl'>
          Learn <span>tech skills</span> that would groom your career
        </h1>
        <p className='lg:text-2xl'>
          Be a member of the community and stand a chance to build your tech
          career with the help of our amazing tutors.
        </p>

        <Button>Become a member</Button>
      </div>

      <img
        src='/images/heroBg.png'
        alt='banner'
        className='order-1 justify-self-center md:order-2 md:justify-self-end'
      />
    </header>
  );
}

export default Hero;
