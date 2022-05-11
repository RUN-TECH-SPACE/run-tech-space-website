import Link from "next/link";
import React from "react";
import Button from "./Button";
import CustomLink from "./CustomLink";

function Navigation() {
  return (
    <nav className='border-b-2 border-lightGrey py-3'>
      <div className='container flex items-center justify-between '>
        <Link href='/'>
          <img src='/images/logo.svg' alt='RUN Tech Space' />
        </Link>

        <ul className='flex space-x-8'>
          <li>
            <a href='/#stacks'>Stacks</a>
          </li>
          <li>{/* <CustomLink to='/about'>About</CustomLink> */} About</li>
          <li>Donate</li>
        </ul>

        <div className='space-x-4'>
          <Button type='secondary'>Join us on WhatsApp</Button>
          <Button type='link' href='/join_us'>
            Join us
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
