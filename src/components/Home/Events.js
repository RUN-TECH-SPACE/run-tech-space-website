import React from "react";

function Events() {
  const onGoingEvents = [
    {
      tag: "Every Wednesday",
      title: "Reactathon",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque.",
    },
    {
      tag: "Every Wednesday",
      title: "Reactathon",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque.",
    },
    {
      tag: "Every Wednesday",
      title: "Reactathon",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque.",
    },
  ];

  return (
    <section className='bg-lightGrey py-20'>
      <div className='container'>
        <h2 className='heading2'>Events</h2>

        <div className='mt-20 gap-8 md:flex md:justify-between'>
          {onGoingEvents.map((item, index) => (
            <div key={index} className='space-y-2'>
              <p>
                <span className='my-auto mr-2 inline-block h-2 w-2 rounded-full bg-[#D73B3B] '></span>
                {item.tag}
              </p>
              <h3 className='text-3xl font-semibold'>{item.title}</h3>
              <p className=''>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col gap-12 md:flex-row'>
          <div className='order-2 flex-1 space-y-2'>
            <p>
              <span className='my-auto mr-2 inline-block h-2 w-2 rounded-full bg-[#D73B3B]'></span>
              July 23, 2022
            </p>
            <h3 className='text-3xl font-semibold'>2022/23 Hackathon</h3>
            <p className=''>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed
              ac nec pellentesque. Etiam quam volutpat, nisl quam massa
              consequat at facilisi. Nisi cursus pharetra integer eu. Commodo
              turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat
              velit, faucibus ut pretium est. Sagittis, consequat, congue est
              libero. Dictum eu amet amet proin odio.
            </p>

            <button>Read More</button>
          </div>

          <img
            src='/images/hackathon.png'
            alt='hackathon'
            className=' order-1 h-full rounded-[50px] md:order-2'
          />
        </div>
      </div>
    </section>
  );
}

export default Events;
