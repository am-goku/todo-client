import React from 'react'
import Task from '../task/Task'

function Events({tasks, setTasks, event}) {
  return (
    <>
      <div className="bg-gray-400 h-[70vh] rounded-md custom-box flex flex-col gap-3 overflow-auto no-scrollbar">
        <span className='font-mono font-semibold text-xl p-4 '>{event?.eventName}</span>
        {
          tasks?.map((task, index) => {
            return <Task setTasks={setTasks} task={task} key={index}/>
          })
        }
      </div>
    </>
  );
}

export default Events