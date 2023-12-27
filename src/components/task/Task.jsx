import React from 'react'
import { GiCrossMark } from "react-icons/gi";


function Task() {
  return (
    <>
      <div className="w-full bulgeBox flex items-center gap-4">
        <div className="w-full h-fit flex flex-col gap-2">
          <span className="text-white text-lg font-medium font-sans">
            This is a sample todo task for testing. This is a sample todo task
            This is a sample todo task for testing.
          </span>
          <span className='text-sm'> 26 - Jun - 2001 </span>
        </div>
        <GiCrossMark className="text-red-500 cursor-pointer" />
      </div>
    </>
  );
}

export default Task