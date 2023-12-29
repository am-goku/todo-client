import React, { useState } from 'react'
import { GiCrossMark } from "react-icons/gi";
import { deleteTask } from '../../services/apis/task-methods';


function Task({task, setTasks}) {
  const [error, setError] = useState('')
  const deleteOne = () => {
    
    deleteTask(task?._id).then((res) => {
      setTasks((prev)=> prev.filter((t)=> {return t._id !== task._id}))
    }).catch((err) => {
      setError(err)
    })
  }
  return (
    <>
      <div className="w-96 bulgeBox flex items-center gap-4">
        <div className="w-full h-fit flex flex-col gap-2 overflow-scroll no-scrollbar">
          <div className="w-full h-fit flex flex-col gap-2 overflow-scroll no-scrollbar">
            <span className="text-white text-lg font-medium font-sans max-w-full">
              {task?.task}
            </span>
          </div>
          <span className="text-sm"> 26 - Jun - 2001 </span>
        </div>
        <GiCrossMark className="text-red-500 cursor-pointer" onClick={deleteOne} />
      </div>
    </>
  );
}

export default Task