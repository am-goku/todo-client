import React, { useState } from "react";
import AddTaskBtn from "../buttons/AddTaskBtn";
import DeleteEventBtn from "../buttons/DeleteEventBtn";
import ClearListBtn from "../buttons/ClearListBtn";

function AddTask({eventId, setTasks, taskLength}) {
  const [task, setTask] = useState(null);

  const setField = () => {
    document.getElementById("field").value = ''
  }

  return (
    <>
      <div className="p-10 flex flex-col gap-8 custom-box relative">
        <textarea
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          id="field"
          cols="40"
          rows="10"
          className="resize-none rounded-md custom-box"
        ></textarea>
        <AddTaskBtn
          setField={setField}
          task={task}
          eventId={eventId}
          setTasks={setTasks}
        />

        <div className="flex mt-auto">
          {taskLength > 0 && (
            <ClearListBtn eventId={eventId} setTasks={setTasks} />
          )}
          <DeleteEventBtn eventId={eventId} />
        </div>
      </div>
    </>
  );
}

export default AddTask;
