import React from "react";
import Button from "../Button";

function Hero({ link, heading }) {
  return (
    <header className='container grid gap-3 py-20 md:grid-cols-2'>
      <div className='order-2 space-y-3 self-center md:order-1'>
        <h1 className='heading2 text-left'>{heading}</h1>
        <p className='md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          et, cursus tincidunt eu maecenas. Montes, metus sagittis nibh
          venenatis in massa nec massa lorem. Blandit morbi nec eget lectus eget
          tristique. Aenean molestie tortor praesent id. Eu curabitur eget
          aenean venenatis nisl suscipit odio pharetra at. Nibh nibh integer
          diam duis. Ligula vitae, pretium fringilla dui massa et. Sem vel
          sodales eu vehicula. Dui sed viverra augue curabitur suspendisse sed
          porttitor gravida. Vulputate cursus sit neque pharetra volutpat
          placerat.
        </p>
        <Button type='link' href={link}>
          Join {heading} Stack
        </Button>
      </div>

      <img
        src='/images/uiux/ui-hero.png'
        alt='banner'
        className='order-1 justify-self-center md:order-2 md:justify-self-end'
      />
    </header>
  );
}

export default Hero;
