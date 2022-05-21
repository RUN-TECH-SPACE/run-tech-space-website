import React from "react";

function What({ what }) {
  // console.log(what)
  return (
    <div className='space-y-20'>
      <section className='container'>
        <h2 className='heading2 mb-3 text-left'>What is UI & UX Design?</h2>

        <div className='space-y-3'>
          {what?.map((item, id) => (
            <p key={id} className='md:text-lg'>
              {item.text}
            </p>
          ))}
        </div>
      </section>
      {/* <section className='container'>
        <h2 className='heading2 mb-3 text-left'>Why UI & UX Design?</h2>
        <p className='md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          vulputate tincidunt ante lorem varius donec feugiat. Ut tellus sapien
          sit interdum eget augue congue nulla diam. Sed feugiat sit diam diam
          faucibus id at mattis quam. Metus, pretium auctor tempus senectus.
        </p>
      </section>
      <section className='container'>
        <h2 className='heading2 mb-3 text-left'>
          What do UI & UX Designers do?
        </h2>
        <p className='md:text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
          vulputate tincidunt ante lorem varius donec feugiat. Ut tellus sapien
          sit interdum eget augue congue nulla diam. Sed feugiat sit diam diam
          faucibus id at mattis quam. Metus, pretium auctor tempus senectus.
          Diam nisl vitae vel dolor dignissim turpis pharetra amet. Volutpat, in
          egestas a venenatis. Feugiat elit hac arcu consectetur ac praesent eu
          orci nibh.
        </p>
      </section> */}
    </div>
  );
}

export default What;
