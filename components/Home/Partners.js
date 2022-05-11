import React from "react";

function Partners() {
  return (
    <section className='bg-lightGrey py-20'>
      <div className='container'>
        <h2 className='heading2'>Ours Partners</h2>

        <div className='mt-12 flex justify-between gap-5'>
          {Array(4)
            .fill()
            .map((item, index) => (
              <div
                key={index}
                className='h-[100px] w-[80%] rounded-md bg-[#EBEBEB]'
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
