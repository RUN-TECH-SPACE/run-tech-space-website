import React from "react";

function Instructors({frontend, uiux}) {
  return (
    <div className="container">
      <h2  className='heading2 mb-4 text-left'>Instructors</h2>

      {frontend && (
        <img src="/images/favourite.jpg" alt="Favourite Jome"  className="w-[180px] rounded-t-[50%] h-[200px] object-cover transition ease-in filter saturate-50 hover:filter-none" />
      )}

      {uiux && (
        <div className="flex gap-3 flex-wrap">
          <img src="/images/seun.jpg" alt="Favourite Jome" className="w-full max-w-[180px] rounded-t-[50%] h-[200px] object-cover transition ease-in filter saturate-50 hover:filter-none [object-position:_-43px_0]" />
          <img src="/images/chime.jpg" alt="Favourite Jome" className="w-full max-w-[180px] rounded-t-[50%] h-[200px] object-cover transition ease-in filter saturate-50 hover:filter-none " />
        </div>
      )}
    </div>
  );
}

export default Instructors;
