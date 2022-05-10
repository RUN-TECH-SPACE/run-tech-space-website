import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";

function JoinUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div className='grid min-h-screen grid-cols-12'>
      <div className='col-span-12 bg-[#1253A6] bg-[url(../public/images/joinUsBg.png)] bg-cover bg-no-repeat p-12 md:col-span-4 md:block'>
        <Link to='/' className='flex items-center gap-3 text-white'>
          <img src='/images/arrow-left.svg' alt='' />
          Return to Homepage
        </Link>
      </div>

      <div className='col-span-12 p-12 md:col-span-8'>
        <h2 className='heading2 text-left'>Join us</h2>
        <p className='mt-2 text-xl'>
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

            <div className='flex justify-between gap-3'>
              <Button type='select' onClick={handleClick}>
                Front // Backend Development
              </Button>
              <Button type='select' onClick={handleClick}>
                UI & UX Design
              </Button>
              <Button type='select' onClick={handleClick}>
                Al & Data Science
              </Button>
            </div>
          </div>

          <Input
            label='What is your motivation?'
            type='textarea'
            register={register("motivation", { required: true })}
          />

          <Button type='submit' className='w-full'>
            Join Us
          </Button>
        </form>
      </div>
    </div>
  );
}

export default JoinUs;
