import React from "react";
import Button from "../Button";

function JoinUs() {
  return (
    <section className='joinUsImage container mt-28 space-y-4 rounded-[50px]  px-10 py-20 pt-40'>
      <h2 className='heading2 max-w-lg text-left text-white'>
        Are you ready to become a tech bro / tech sis?
      </h2>
      <p className='max-w-lg  text-[#8A8A8A] md:text-xl'>
        As you'll have gathered, we're open and ready to have you join our
        community today
      </p>
      <Button>Join Us</Button>
    </section>
  );
}

export default JoinUs;
