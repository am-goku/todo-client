import React, { useState } from 'react'

import { MdPostAdd } from "react-icons/md";

function AddEvent() {
    const [eventName, setEventName] = useState(null);

    const handleSubmit = () => {
        if(eventName){
            
        }
    }

  return (
    <>
      <div className="aspect-square w-56 rounded-sm custom-box flex flex-col gap-3 select-none">
        <input onChange={(e) => setEventName(e.target.value.trim())} type="text" placeholder='New event' className='w-full rounded-md p-3 bg-transparent border-2 border-black text-white' />
            <MdPostAdd onClick={handleSubmit} className='w-full h-full text-gray-400 bulgeBox cursor-pointer hover:text-gray-300'/>
      </div>
    </>
  );
}

export default AddEvent