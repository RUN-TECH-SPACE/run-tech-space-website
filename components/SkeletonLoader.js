import React from "react";

function SkeletonLoader() {
  return (
    <div>
      {Array(1)
        .fill()
        .map((_, i) => (
          <div key={i} className='animate-pulse py-4'>
            <div className='my-4'>
              <div className='h-[300px] w-full bg-[#0000005d] md:h-[600px]'></div>

              <div className='my-3 flex w-full animate-pulse space-x-3'>
                <div className='h-[10px] w-full rounded bg-[#0000005d] md:h-[100px]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d] md:h-[100px]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d] md:h-[100px]'></div>
                <div className='h-[10px] w-full rounded bg-[#0000005d] md:h-[100px]'></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SkeletonLoader;
