import React from "react";
import Button from "../Button";

function Hero() {
  return (
    <header className='container grid gap-3 py-20 md:grid-cols-2'>
      <div className='order-2 space-y-3 self-center md:order-1'>
        <h1 className='text-3xl font-semibold leading-[46px] md:text-4xl md:leading-[46px] lg:max-w-[627px] lg:text-6xl lg:leading-[76px]'>
          Learn{" "}
          <span
            className={`heroLine bg-no-repeat pb-2 [background-position:_0_33px] lg:bg-bottom lg:pb-0`}
          >
            tech skills
          </span>{" "}
          that would groom your career
        </h1>
        <p className=' lg:text-2xl'>
          Be a member of the community and stand a chance to build your tech
          career with the help of our amazing tutors.
        </p>

        <Button type='link' href='/join_us'>
          Become a member
        </Button>
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
