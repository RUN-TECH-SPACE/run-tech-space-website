import React from "react";

function Footer() {
  return (
    <footer className='my-12'>
      <div className='container'>
        <div className='mb-16 grid md:grid-cols-4'>
          <img src='/images/logo.svg' alt='RUN Tech Space' />

          <div>
            <h4 className='mb-3 font-medium'>Home</h4>
            <ul className='space-y-3'>
              {["Partners", "About", "Events", "Gallery"].map((item, index) => (
                <li key={index} className='text-grey'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='mb-3 font-medium'>Stacks</h4>
            <ul className=' space-y-3'>
              {[
                "Frontend development",
                "UI & UX design",
                "AI & Data Science",
              ].map((item, index) => (
                <li key={index} className='text-grey'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ul>
            {["Home", "Partners", "About", "Events", "Gallery"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>

        <p className='text-center'>©2022 RUN Tech Space. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
