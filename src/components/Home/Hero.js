import React from "react";
import Button from "../Button";

function Hero() {
  return (
    <header className='container grid md:grid-cols-2'>
      <div>
        <h1 className='text-3xl'>
          Learn tech skills that would groom your career
        </h1>
        <p>
          Be a member of the community and stand a chance to build your tech
          career with the help of our amazing tutors.
        </p>

        <Button>Become a member</Button>
      </div>

      <img src='' alt='' />
    </header>
  );
}

export default Hero;
