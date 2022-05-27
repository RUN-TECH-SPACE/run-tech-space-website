import React from "react";

function CourseOutline({outline}) {

  return (
    <section className='container space-y-8'>
      <h2 className='heading2 text-left'>Course outline</h2>

      <ul className='ml-5 list-disc space-y-3 text-[#8A8A8A] md:text-lg'>
        {outline.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default CourseOutline;
