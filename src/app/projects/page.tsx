import Cardproject from '@/components/CardProject';
import React from 'react'

const page = () => {
  return (
    <div className="md:h-[165vh] h-[290vh]">
      <div className=" mt-24">
        <div className="text-3xl md:text-4xl font-semibold top-24 text-neutral-300 max-md:ml-4 ">
          Projects
        </div>
        <div className="h-[85vh] pr-14  bg-transparent mt-10 ">
          <div className="grid md:grid-cols-2 w-full gap-10 items-start justify-center h-full mb-10 max-md:mx-7  ">
            <Cardproject />
            <Cardproject />
            <Cardproject />
            <Cardproject />
            <Cardproject />
            <Cardproject />
            <Cardproject />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page 