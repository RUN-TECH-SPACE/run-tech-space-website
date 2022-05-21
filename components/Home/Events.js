import React from "react";

function Events() {
  const onGoingEvents = [
    {
      tag: "Every Wednesday",
      title: "Tech Truths $ Bants",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque.",
    },
    // {
    //   tag: "Every Wednesday",
    //   title: "Reactathon",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque.",
    // },
    // {
    //   tag: "Every Wednesday",
    //   title: "Reactathon",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque.",
    // },
  ];

  return (
    <section className='bg-lightGrey py-20' id='events'>
      <div className='container'>
        <h2 className='heading2'>Events</h2>

        <div className='mt-12 gap-8 md:mt-20 md:flex md:justify-center md:text-center'>
          {onGoingEvents.map((item, index) => (
            <div key={index} className='space-y-2 even:my-10 md:even:my-0'>
              <p>
                <span className='my-auto mr-2 inline-block h-2 w-2 rounded-full bg-[#D73B3B] '></span>
                {item.tag}
              </p>
              <h3 className='text-xl font-semibold md:text-3xl'>
                {item.title}
              </h3>
              <p className='max-w-sm'>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 grid gap-5 md:grid-cols-3 md:flex-row md:gap-10'>
          <img
            src='/images/hackathon.png'
            alt='hackathon'
            className='order-1 col-span-2 h-full  w-full rounded-[20px] object-cover md:order-2 md:col-span-1 md:rounded-[50px]'
          />

          <div className='order-1 col-span-2 space-y-2'>
            <p>
              <span className='my-auto mr-2 inline-block h-2 w-2 rounded-full bg-[#D73B3B]'></span>
              July 23, 2022
            </p>

            <h3 className='text-xl font-semibold md:text-3xl'>
              TechFest 1.0: A Journey Into Tech
            </h3>

            <p className='md:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed
              ac nec pellentesque. Etiam quam volutpat, nisl quam massa
              consequat at facilisi. Nisi cursus pharetra integer eu. Commodo
              turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat
              velit, faucibus ut pretium est. Sagittis, consequat, congue est
              libero. Dictum eu amet amet proin odio.
            </p>

            <button className='font-semibold text-[#1253A6]'>
              Read More &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
