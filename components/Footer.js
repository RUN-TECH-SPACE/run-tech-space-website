import React from "react";
import Link from "next/link"

function Footer() {
  return (
    <footer className='my-12 pt-20'>
      <div className='container'>
        <div className='mb-16 grid md:grid-cols-12 md:gap-5'>
          <img
            src='/images/logo.svg'
            alt='RUN Tech Space'
            className=' col-span-12 md:col-span-3'
          />

          <div className='col-span-6 mt-10 md:col-span-3  md:mt-0'>
            <h4 className='mb-3 font-medium'>Home</h4>
            <ul className='space-y-3'>
              {["Partners", "About", "Events", "Gallery"].map((item, index) => (
                <li key={index} className='text-grey'>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='col-span-6 mt-10 md:col-span-3 md:mt-0'>
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

          <div className='col-span-12 mt-10 space-y-3 text-center md:col-span-3 md:mt-0 md:text-left'>
            <div className='flex justify-center gap-4 md:justify-start'>
              {[
                "/images/facebook.svg",
                "/images/instagram.svg",
                "/images/linkedin.svg",
                "/images/twitter.svg",
              ].map((img, ind) => (
                <Link key={ind} href='/#'>
                  <a>
                    <img src={img} alt='icon' />
                  </a>
                </Link>
              ))}
            </div>
            <p>support@runtechspace.com</p>
            <p>+234-XXXX-XXXX</p>
          </div>
        </div>

        <p className='text-center'>©2022 RUN Tech Space. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
