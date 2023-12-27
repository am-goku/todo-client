import React, { useState } from "react";
import AddTaskBtn from "../buttons/AddTaskBtn";
import DeleteEventBtn from "../buttons/DeleteEventBtn";
import ClearListBtn from "../buttons/ClearListBtn";

function AddTask() {
  const [task, setTask] = useState(null);

  return (
    <>
      <div className="p-10 flex flex-col gap-8 custom-box relative">
        <textarea
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          cols="40"
          rows="10"
          className="resize-none rounded-md custom-box"
        ></textarea>
        <AddTaskBtn task={task} />

        <div className="flex mt-auto">
            <ClearListBtn />
            <DeleteEventBtn />
        </div>
      </div>
    </>
  );
}

export default AddTask;
