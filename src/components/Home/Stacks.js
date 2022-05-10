import React from "react";
import Button from "../Button";

function Stacks() {
  const data = [
    {
      title: "Frontend development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join Frontend Development",
    },
    {
      title: "UI & UX Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join UI & UX Design",
    },
    {
      title: "Artificial Intelligence & Data Science",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join AI & Data Science",
    },
  ];
  return (
    <section className='container py-20'>
      <h2 className='heading2'>Community Stacks</h2>

      <div className='mt-20 space-y-20'>
        {data.map((item, index) => (
          <div className=' grid gap-6 odd:order-2 md:grid-cols-2'>
            <div
              key={index}
              className='item-center self-center even:bg-slate-500'
            >
              <h3 className='mb-3 md:text-3xl'>{item.title}</h3>
              <p>{item.text}</p>

              <Button className='mt-5'>{item.btn}</Button>
            </div>

            <div className='max-w-96 h-96 w-full bg-[#F9F9F9] '></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stacks;
