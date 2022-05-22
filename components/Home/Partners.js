import React from "react";

function Partners() {
  return (
    <section className='bg-lightGrey py-20' id='partners'>
      <div className='container'>
        <h2 className='heading2'>Ours Partners</h2>

        <div className='mx-auto mt-12 flex max-w-md justify-around gap-5'>
          <img src='/images/runsa.png' alt='runsa' />
          <img src='/images/hoshistech.png' alt='hoshistech' />
        </div>
      </div>
    </section>
  );
}

export default Partners;
