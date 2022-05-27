import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "next/link";
import Head from "next/head";
import { base } from "../../util";
import { useRouter } from "next/router";
import StackSelect from "../../components/StackSelect";

function JoinUs() {
  const [loading, setLoading] = useState(false);
  const [selectedStack, setSelectedStack] = useState([]);
  const [stackFd, setStackFd] = useState(false);
  const [stackUi, setStackUi] = useState(false);
  const [stackAi, setStackAi] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const [fd, ui, ai] = selectedStack;
    const [fd_d, ui_d, ai_id] = [stackFd, stackUi, stackAi];

    // For the desktop stack selection
    fd_d = fd_d ? "Frontend Development" : null;
    ui_d = ui_d ? "UI & UX Design" : null;
    ai_id = ai_id ? "Al & Data Science" : null;

    // console.log(JSON.stringify([fd?.name, ui?.name, ai?.name]));
    // console.log(fd_d, ui_d, ai_id);

    const payload = {
      ...data,
      stack: selectedStack.length
        ? JSON.stringify([fd?.name, ui?.name, ai?.name])
        : JSON.stringify([fd_d, ui_d, ai_id]),
    };

    setLoading(true);

    base("Registration").create(
      [
        {
          fields: payload,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        router.push("/join_us/success");
        setLoading(false);
      }
    );
  };

  return (
    <>
      <Head>
        <title>Join Us - RUN Tech Space</title>
      </Head>

      <main className='grid min-h-screen grid-cols-12'>
        <aside className='col-span-12 bg-[#1253A6] bg-[url(../public/images/joinUsBg.png)] bg-cover bg-no-repeat py-12 px-8 md:col-span-4  md:block md:px-12'>
          <Link href='/'>
            <a className='inline-flex items-center gap-3 text-white'>
              <img src='/images/arrow-left.svg' alt='' />
              Return to Homepage
            </a>
          </Link>
        </aside>

        <div className='col-span-12 p-8 md:col-span-8 md:p-12'>
          <h2 className='heading2 text-left'>Join us</h2>
          {/* <p className='mt-2 text-base md:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac
            nec pellentesque.
          </p> */}

          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-12'>
            <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
              <div className='w-full'>
                <Input
                  label='First Name'
                  register={register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className='mt-2 text-sm text-red-500'>
                    First Name input not field
                  </span>
                )}
              </div>

              <div className='w-full'>
                <Input
                  label='Last Name'
                  register={register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className='mt-2 text-sm text-red-500'>
                    Last Name input not field
                  </span>
                )}
              </div>
            </div>

            <div>
              <Input
                label='Email'
                register={register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <span className='mt-2 text-sm text-red-500'>
                  Email input not field
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className='mt-2 text-sm text-red-500'>
                  Email format not correct
                </span>
              )}
            </div>

            <div className='flex flex-col gap-8 md:flex-row md:justify-between'>
              <div className='w-full'>
                <Input
                  label='Department'
                  register={register("department", { required: true })}
                />
                {errors.department && (
                  <span className='mt-2 text-sm text-red-500'>
                    Department input not field
                  </span>
                )}
              </div>

              <div className='w-full'>
                <Input
                  label='Level'
                  type='select'
                  register={register("level", { required: true })}
                />
                {errors.level && (
                  <span className='mt-2 text-sm text-red-500'>
                    Level input not field
                  </span>
                )}
              </div>
            </div>

            <div>
              <p>Select stack(s) - Maximum of two stacks</p>

              {/* Desktop */}
              <div className='mt-2 hidden flex-col justify-between gap-3 md:flex md:flex-row'>
                <Button
                  type='select'
                  id='fd'
                  onClick={() => setStackFd(!stackFd)}
                  className={`${
                    stackFd
                      ? "bg-[#1253A6] text-white hover:border-[#1253A6] "
                      : "text-[#1253A6]"
                  } border-2 border-lightGrey`}
                >
                  Front // Backend Development
                </Button>
                <Button
                  type='select'
                  id='ui'
                  onClick={() => setStackUi(!stackUi)}
                  className={`${
                    stackUi
                      ? "bg-[#1253A6] text-white hover:border-[#1253A6] "
                      : "text-[#1253A6]"
                  } border-2 border-lightGrey`}
                >
                  UI & UX Design
                </Button>
                <Button
                  type='select'
                  id='ai'
                  onClick={() => setStackAi(!stackAi)}
                  className={`${
                    stackAi
                      ? "bg-[#1253A6] text-white hover:border-[#1253A6] "
                      : "text-[#1253A6]"
                  } border-2 border-lightGrey`}
                >
                  Al & Data Science
                </Button>
              </div>

              {/* Mobile */}
              <div className='md:hidden'>
                <StackSelect
                  register={register("stack")}
                  selectedStack={selectedStack}
                  setSelectedStack={setSelectedStack}
                />
              </div>
            </div>

            <Input
              label='What is your motivation?'
              type='textarea'
              register={register("motivation")}
            />

            <Button
              type='submit'
              className='flex w-full items-center justify-center'
            >
              {loading && (
                <svg
                  className='mr-3 inline h-5 w-5 animate-spin text-white'
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
