import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";
import Head from "next/head";
import { base } from "../../util";
import { useRouter } from "next/router";

function JoinUs() {
  const [loading, setLoading] = useState(false);
  const [stacks, setStacks] = useState([
    {
      id: "fd",
      active: false,
    },
    {
      id: "ui",
      active: false,
    },
    {
      id: "ai",
      active: false,
    },
  ]);

  const router = useRouter();

  useEffect(() => {
    console.log(stacks);
  }, [stacks]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    base("Registration").create(
      [
        {
          fields: data,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          // setToast("error");
          return;
        }
        // records.forEach(function (record) {
        //   reset();
        // });
        // setToast("success");
        router.push("/join_us/success");
        setLoading(false);
      }
    );
  };

  const handleClick = (e) => {
    const option = {
      id: e.target.id,
      active: !stacks.find((stack) => stack.id === e.target.id).active,
    };

    console.log(option);

    // setStacks((prevState) => (
    //   [
    //   ...stacks,
    //   {
    //     id: e.target.id,
    //     active: !stacks.find((stack) => stack.id === e.target.id).active,
    //   },
    // ]);
  };

  return (
    <>
      <Head>
        <title>Join Us - RUN Tech Space</title>
      </Head>

      <main className='grid min-h-screen grid-cols-12'>
        <div className='col-span-12 bg-[#1253A6] bg-[url(../public/images/joinUsBg.png)] bg-cover bg-no-repeat p-12 md:col-span-4 md:block'>
          <Link href='/'>
            <a className='inline-flex items-center gap-3 text-white'>
              <img src='/images/arrow-left.svg' alt='' />
              Return to Homepage
            </a>
          </Link>
        </div>

        <div className='col-span-12 p-12 md:col-span-8'>
          <h2 className='heading2 text-left'>Join us</h2>
          <p className='mt-2 text-base md:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac
            nec pellentesque.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-12'>
            <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
              <Input
                label='First Name'
                register={register("firstName", { required: true })}
              />
              <Input
                label='Last Name'
                register={register("lastName", { required: true })}
              />
            </div>

            <Input
              label='Email'
              register={register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.email?.type === "pattern" && (
              <span className='mt-2 text-sm text-red-500'>
                Email format not correct
              </span>
            )}

            <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
              <Input
                label='Department'
                register={register("department", { required: true })}
              />
              <Input
                label='Level'
                type='select'
                register={register("level", { required: true })}
              />
            </div>

            <div>
              <p>Select stack(s) - Maximum of two stacks</p>

              <div className='mt-2 flex flex-col justify-between gap-3 md:flex-row'>
                <Button
                  type='select'
                  id='fd'
                  onClick={handleClick}
                  className={`${
                    stacks[0].id === "fd" && stacks[0].active ? "bg-red" : ""
                  }`}
                >
                  Front // Backend Development
                </Button>
                <Button type='select' id='ui' onClick={handleClick}>
                  UI & UX Design
                </Button>
                <Button type='select' id='ai' onClick={handleClick}>
                  Al & Data Science
                </Button>
              </div>

              <label htmlFor='stacks'>
                <input type='checkbox' name='' id='' />
                Front // Backend Development
              </label>
              <label htmlFor='stacks'>
                <input type='checkbox' name='' id='' />
                UI & UX Design
              </label>
              <label htmlFor='stacks'>
                <input type='checkbox' name='' id='' />
                Al & Data Science
              </label>
            </div>

            <Input
              label='What is your motivation?'
              type='textarea'
              register={register("motivation", { required: true })}
            />

            <Button type='submit' className='w-full'>
              {loading && (
                <svg
                  className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
              Join Us
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}

export default JoinUs;