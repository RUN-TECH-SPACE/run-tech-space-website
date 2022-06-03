import React from "react";

function Instructors({frontend, uiux}) {
  return (
    <div className="container">
      <h2  className='heading2 mb-4 text-left'>Instructors</h2>

      {frontend && (
        <div className="flex flex-col max-w-[180px]">
          <img src="/images/favourite.jpg" alt="Favourite Jome" className="w-[180px] rounded-t-[50%] h-[200px] object-cover transition ease-in filter saturate-50 hover:filter-none" />
          <p className="font-medium text-[#323232] text-center mt-3 in">Favourite Jome</p>
        </div>
      )}

      {uiux && (
        <div className="flex gap-3">
          <div>
            <img src="/images/seun.jpg" alt="Seun Amore" className="w-full max-w-[180px] rounded-t-[50%] h-[200px] object-cover transition ease-in filter saturate-50 hover:filter-none [object-position:_-43px_0]" />
            <p className="font-medium text-[#323232] text-center mt-3 in">Seun</p>
            </div>
          <div>
            <img src="/images/chime.jpg" alt="Chime" className="w-full max-w-[180px] rounded-t-[50%] h-[200px] object-cover transition ease-in filter saturate-50 hover:filter-none " />
            <p className="font-medium text-[#323232] text-center mt-3 in">Chime</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Instructors;
