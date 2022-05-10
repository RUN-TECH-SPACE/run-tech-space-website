import React from "react";

function Benefits() {
  return (
    <section className='container grid py-20 md:grid-cols-2'>
      <h2 className='heading2 text-left'>
        Benefits of RUN Tech Space to Redeemer’s University
      </h2>

      <div>
        <ol>
          {[
            "1.	RUN tech space will boost the image of Redeemer’s University by competing in Tech competition both locally and internationally.",
            "2.	RUN tech space will help Redeemer’s university, Nigeria and probably the world with her projects and help bring solutions to some of her problems.",
            "3.	RUN tech space will portray Redeemer’s university as one of the universities at the frontline of technological advancement in Nigeria.",
            "4.	RUN tech space will portray Redeemer’s university as the home of creativity and innovation in Africa.",
            "5.	RUN tech space will help Redeemer’s university students get grants and awards.",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Benefits;
