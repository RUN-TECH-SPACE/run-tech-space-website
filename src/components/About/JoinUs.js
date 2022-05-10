import React from "react";
import Button from "../Button";

function JoinUs() {
  return (
    <section className='container bg-[url(../public/images/join-us.png)] py-20'>
      <h2 className='heading2 text-left text-white'>
        Are you ready to become a tech bro / tech sis?
      </h2>
      <p>
        As you'll have gathered, we're open and ready to have you join our
        community today
      </p>
      <Button>Join Us</Button>
    </section>
  );
}

export default JoinUs;
