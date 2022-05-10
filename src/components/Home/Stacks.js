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
      title: "Frontend development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join Frontend Development",
    },
    {
      title: "Frontend development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join Frontend Development",
    },
  ];
  return (
    <section>
      <h2 className='text-center text-4xl'>Community Stacks</h2>

      {data.map((item, index) => (
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='item-center even:order-2'>
            <React.Fragment key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <Button>{item.btn}</Button>
            </React.Fragment>
          </div>

          <div className='max-w-96 h-96 w-full bg-[#F9F9F9]'></div>
        </div>
      ))}
    </section>
  );
}

export default Stacks;
