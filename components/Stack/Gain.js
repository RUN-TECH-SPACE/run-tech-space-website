import React from "react";

function Gain() {
  return (
    <section className='bg-[#F9F9F9] py-16'>
      <div className='container'>
        <h2 className='heading2 mb-12 text-left'>What do you stand to gain?</h2>

        <div className='grid gap-10 md:grid-cols-2 md:grid-rows-2 md:gap-10'>
          <div className='gap-4 text-center md:grid md:grid-cols-[40px_1fr] md:text-left'>
            <img
              src='/images/uiux/gain1.svg'
              alt=''
              className='mx-auto md:ml-0'
            />
            <div>
              <h3 className='text-lg font-medium md:text-xl'>
                Build your portfolio
              </h3>
              <p className='md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </div>
          <div className='gap-4 text-center md:grid md:grid-cols-[40px_1fr] md:text-left'>
            <img
              src='/images/uiux/gain2.svg'
              alt=''
              className='mx-auto md:ml-0'
            />
            <div>
              <h3 className='text-lg font-medium md:text-xl'>
                Collaborate with other designers
              </h3>
              <p className='md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='gap-4 text-center md:grid md:grid-cols-[40px_1fr] md:text-left'>
            <img
              src='/images/uiux/gain3.svg'
              alt=''
              className='mx-auto md:ml-0'
            />
            <div>
              <h3 className='text-lg font-medium md:text-xl'>
                Access to premium content
              </h3>
              <p className='md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className='gap-4 text-center md:grid md:grid-cols-[40px_1fr] md:text-left'>
            <img
              src='/images/uiux/gain4.svg'
              alt=''
              className='mx-auto md:ml-0'
            />
            <div>
              <h3 className='text-lg font-medium md:text-xl'>
                Hands-on-learning
              </h3>
              <p className='md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gain;
