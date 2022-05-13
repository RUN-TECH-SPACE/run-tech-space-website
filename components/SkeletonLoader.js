import React from "react";

function SkeletonLoader() {
  return (
    <div>
      {Array(4)
        .fill()
        .map((_, i) => (
          <div key={i} className='animate-pulse py-8 odd:bg-[#F1F2F6]'>
            <div className='container gap-12 md:flex'>
              <div className='h-[200px] w-full bg-gray-300 md:w-[400px]'></div>

              <div className='my-3 w-full animate-pulse space-y-3'>
                <div className='h-[20px] w-[60%] rounded bg-[#0000003d]'></div>
                <div className='mt-3 h-[10px] w-[70%] rounded bg-[#0000003d]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000003d]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d]'></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SkeletonLoader;
