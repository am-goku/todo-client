import React, { useEffect, useState } from "react";
import { addTask } from "../../services/apis/task-methods";

function AddTaskBtn({ task, eventId, setTasks, setField }) {
  const [error, setError] = useState("");
  const handleSubmit = () => {
    if (task) {
      addTask({ eventId, task })
        .then((res) => {
          console.log(res);
          setTasks((prev) => [res, ...prev]);
          setField()
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setError("Please add a task");
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  return (
    <>
      {error && <span className="font-mono text-sm text-red-300">{error}</span>}
      <button
        onClick={handleSubmit}
        className="text-white ml-auto rounded-md p-3 bulge"
      >
        Add Task
      </button>
    </>
  );
}

export default AddTaskBtn;
