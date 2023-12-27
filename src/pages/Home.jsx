import React from 'react'
import AddEvent from '../components/event/AddEvent';

function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="grid grid-cols-5 gap-10">
        <AddEvent />
        <span className='self-center font-bold text-2xl font-mono select-none'>Create a new event</span>
      </div>
    </div>
  );
}

export default Home