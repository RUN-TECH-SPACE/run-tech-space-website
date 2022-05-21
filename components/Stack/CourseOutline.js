import React from "react";

function CourseOutline() {
  const outline = [
    "Introduction to UI/UX",
    "Refactoring UI brush up",
    "Introduction to Figma",
    "Advanced Figma: Learning component, auto layout and variants.",
    "Google UX Course: Foundation of User Experience (UX) Design Review.",
    "Google UX Course: Empathize, Deﬁne and Ideate Review",
    "Google UX Course: Build Wireframes and Low-Fidelity Prototypes Review",
    "Google UX Course: Conduct UX Research and Test Early Concept Review",
    "Google UX Course: Create High-FIdelity Designs and Prototypes in Figma Review",
  ];

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
