import React from "react";

function Mission() {
  return (
    <section className='bg-lightGrey py-20'>
      <div className='container grid gap-8 md:grid-cols-2'>
        <div>
          <h2 className='heading2 text-left'>Mission</h2>
          <p className='mt-2 text-lg md:text-xl'>
            To provide students the ability to think creatively and build
            innovative solutions to global problems.
          </p>
        </div>
        <div>
          <h2 className='heading2 text-left'>Vision</h2>
          <p className='mt-2 text-lg md:text-xl'>
            To be the top technological hub for Undergraduates in Africa.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
