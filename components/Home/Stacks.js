import React from "react";
import Button from "../Button";

function Stacks() {
  const data = [
    {
      title: "Frontend development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sed ac nec pellentesque. Etiam quam volutpat, nisl quam massa consequat at facilisi. Nisi cursus pharetra integer eu. Commodo turpis a, luctus rutrum ut erat elit. Amet neque ut tortor erat velit, faucibus ut pretium est. Sagittis, consequat, congue est libero. Dictum eu amet amet proin odio.",
      btn: "Join Frontend Development",
      image: "/images/fd.png",
      href: "/stack/frontend-development",
    },
    {
      title: "UI & UX Design",
      text: "So you want to build a career in user interface design (UI), but there's only one problem: you have no idea where to begin, or you have very good research skills to help users navigate around an interface without difficulty, leading you to a user experience (UX) career. No worries, this is the place for you. The UI/UX stack is available at Run Tech Space community to help you get started in your career.",
      btn: "Join UI & UX Design",
      image: "/images/ui-ux.png",
      href: "/stack/ui-ux-design",
    },
    {
      title: "Artificial Intelligence & Data Science",
      text: "Every day, businesses utilize data and analytics to improve efficiencies, gain deeper operational insights, and ultimately earn more money. However, data science's significance extends far beyond the commercial world and is assisting in the resolution of some of humanity's most serious problems. Data science is being used for the better welfare of society, from helping health practitioners address problems more intelligently to fighting poverty, mitigating climate change, solving transportation issues, and lots more.  Artificial Intelligence impacts our lives and the world around us.",
      btn: "Join AI & Data Science",
      image: "/images/ai.png",
      href: "/stack/artificial-intelligence-&-data-science",
    },
  ];
  return (
    <section className='container py-20' id='stacks'>
      <h2 className='heading2'>Community Stacks</h2>

      <div className='mt-20 flex flex-col  space-y-20 md:grid-cols-2'>
        {data.map((item, index) => (
          <div key={index} className='stacks grid gap-12 md:grid-cols-2 '>
            <img
              src={item.image}
              alt=''
              lazy='true'
              className='w-full self-end justify-self-end md:order-2'
            />

            <div key={index} className='item-center self-center '>
              <h3 className='mb-3 text-xl font-semibold md:text-3xl'>
                {item.title}
              </h3>
              <p className='font-normal md:text-lg'>{item.text}</p>

              <Button
                type='link'
                href={item.href}
                className='mt-5 text-sm md:text-base'
              >
                {item.btn}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stacks;
