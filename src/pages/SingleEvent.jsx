import React from 'react'
import Events from '../components/event/Events'
import AddTask from '../components/task/AddTask'

function SingleEvent() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className='flex gap-10'>
        <Events />
        <AddTask /> 
      </div>
    </div>
  );
}

export default SingleEvent