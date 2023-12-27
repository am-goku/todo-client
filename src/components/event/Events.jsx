import React from 'react'
import Task from '../task/Task'

function Events() {
  return (
    <>
      <div className="bg-gray-400 h-[70vh] rounded-md custom-box flex flex-col gap-3 overflow-auto no-scrollbar">
        <span className='font-mono font-semibold text-xl p-4'>Event Name</span>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </>
  );
}

export default Events