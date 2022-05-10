import React from "react";
import Button from "./Button";

function Navigation() {
  return (
    <nav className='border-b-2 border-lightGrey'>
      <div className='container flex items-center justify-between '>
        <img src='/images/logo.svg' alt='RUN Tech Space' />

        <ul className='flex space-x-8'>
          <li>Stacks</li>
          <li>About</li>
          <li>Donate</li>
        </ul>

        <div className='gap-4'>
          <Button type='secondary'>Join us on WhatsApp</Button>
          <Button type='primary'>Join us</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
