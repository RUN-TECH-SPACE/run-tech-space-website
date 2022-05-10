import React from "react";

function Benefits({ heading, data }) {
  return (
    <section className='container mt-20 grid gap-3 md:grid-cols-2'>
      <div>
        <h2 className='heading2 text-left leading-[50px]'>{heading}</h2>

        <img
          src='/images/benefit-line.svg'
          alt=''
          className='ml-auto mr-20 mt-12 hidden md:block'
        />
      </div>

      <div>
        <ol className='space-y-3'>
          {data.map((item, index) => (
            <li key={index} className='text-lg text-[#8A8A8A] md:text-xl'>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Benefits;
