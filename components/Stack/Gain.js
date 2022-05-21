import React from "react";

function Gain({gain}) {
  return (
    <section className='bg-[#F9F9F9] py-16'>
      <div className='container'>
        <h2 className='heading2 mb-12 text-left'>What do you stand to gain?</h2>

        <div className='grid gap-10 md:grid-cols-2 md:grid-rows-2 md:gap-10'>
          {
            gain.map((item, id) => (
              <div key={id} className='gap-4 text-center md:grid md:grid-cols-[40px_1fr] md:text-left'>
                <img
                  src={item.img}
                  alt=''
                  className='mx-auto md:ml-0'
                />
                <div>
                  <h3 className='text-lg font-medium md:text-xl'>
                    {item.hd}
                  </h3>
                  <p className='md:text-lg'>
                    {item.text}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Gain;
