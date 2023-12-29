import React, { useRef, useState } from "react";

import { MdPostAdd } from "react-icons/md";
import { createEvent } from "../../services/apis/task-methods";
import { useDispatch } from "react-redux";
import { updateUserEvents } from "../../utils/reducers/user-reducer";
import { current } from "@reduxjs/toolkit";

function AddEvent() {
  const ref = useRef();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    const eventName = ref.current.value.trim();
    if (eventName) {
      createEvent(eventName)
        .then((response) => {
          console.log(response);
          dispatch(updateUserEvents(response));
          document.getElementById("field").value = ''
        })
        .catch((err) => {});
    }
  };

  return (
    <>
      <div className="aspect-square w-56 rounded-sm custom-box flex flex-col gap-3 select-none">
        <input
          ref={ref}
          id="field"
          type="text"
          placeholder="New event"
          className="w-full rounded-md p-3 bg-transparent border-2 border-black text-white"
        />
        <MdPostAdd
          onClick={handleSubmit}
          className="w-full h-full text-gray-400 bulgeBox cursor-pointer hover:text-gray-300"
        />
      </div>
    </>
  );
}

export default AddEvent;
