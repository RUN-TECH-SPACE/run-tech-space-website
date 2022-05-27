import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className='my-12 pt-20'>
      <div className='container'>
        <div className='mb-16 grid grid-cols-12 md:gap-5'>
          <Link href='/'>
            <a className='col-span-12 mx-auto md:col-span-3 md:ml-0'>
              <img src='/images/logo.svg' alt='RUN Tech Space' />
            </a>
          </Link>

          <div className='col-span-6 mt-10 md:col-span-3  md:mt-0'>
            <h4 className='mb-3 font-medium'>Home</h4>
            <ul className='space-y-3'>
              {[
                { text: "Partners", link: "/#partners" },
                { text: "About", link: "/about" },
                { text: "Events", link: "/#events" },
                { text: "Gallery", link: "/#gallery" },
              ].map((item, index) => (
                <li key={index} className='text-grey'>
                  <Link href={item.link}>
                    <a>{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-span-6 mt-10 md:col-span-3 md:mt-0'>
            <h4 className='mb-3 font-medium'>Stacks</h4>
            <ul className=' space-y-3'>
              {[
                {
                  text: "Frontend development",
                  link: "/stack/frontend-development",
                },
                { text: "UI & UX design", link: "/stack/ui-ux-design" },
                {
                  text: "AI & Data Science",
                  link: "/stack/artificial-intelligence-&-data-science",
                },
              ].map((item, index) => (
                <li key={index} className='text-grey'>
                  <Link href={item.link}>
                    <a>{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-span-12 mt-10 space-y-3 text-center md:col-span-3 md:mt-0 md:text-left'>
            <div className='flex justify-center gap-4 md:justify-start'>
              {/* "/images/facebook.svg", */}
              {/* "/images/linkedin.svg", */}
              {[
                {
                  image: "/images/instagram.svg",
                  link: "https://www.instagram.com/runtechspace?igshid=YmMyMTA2M2Y=",
                },
                {
                  image: "/images/twitter.svg",
                  link: "https://twitter.com/RunTechSpace_",
                },
              ].map((item, ind) => (
                <Link key={ind} href={item.link}>
                  <a>
                    <img src={item.image} alt='icon' />
                  </a>
                </Link>
              ))}
            </div>
            <p>runtechspace@gmail.com</p>
            <p>+234-XXXX-XXXX</p>
          </div>
        </div>

        <p className='text-center'>©2022 RUN Tech Space. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
