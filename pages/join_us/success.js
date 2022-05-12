import React from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";

function success() {
  return (
    <>
      <Head>
        <title>Congrats! Welcome to the community - RUN Tech Space</title>
      </Head>
      <main className='min-h-screen md:grid md:grid-cols-12'>
        <div className='col-span-12 h-fit bg-[#1253A6] bg-[url(../public/images/joinUsBg.png)] bg-cover bg-no-repeat p-12 md:col-span-4 md:block md:h-auto'>
          <Link href='/'>
            <a className='inline-flex items-center gap-3 text-white'>
              <img src='/images/arrow-left.svg' alt='' aria-hidden='true' />
              Return to Homepage
            </a>
          </Link>
        </div>

        <div className='relative col-span-12 p-12 md:col-span-8'>
          <h2 className='heading2'>You're in!</h2>
          <p className='text-center'>
            You're officially now a member of{" "}
            <span className='text-[#1253A6]'>RUN Tech Space</span>.
          </p>

          <img
            src='/images/success.svg'
            alt='congrats'
            className='mx-auto my-8 w-full max-w-[600px]'
          />

          <Button
            type='secondary'
            className='mx-auto flex items-center justify-center gap-2'
          >
            <img src='/images/whatsapp.svg' alt='whatsapp' />
            Join us on WhatsApp
          </Button>
        </div>
      </main>
    </>
  );
}

export default success;
