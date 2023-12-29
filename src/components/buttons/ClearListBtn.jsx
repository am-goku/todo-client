import React from "react";
import { clearTasks } from "../../services/apis/task-methods";

function ClearListBtn({ eventId, setTasks }) {
  const clear = () => {
    clearTasks(eventId)
      .then(() => {
        setTasks([]);
      })
      .catch((err) => {});
  };
  return (
    <>
      <button
        onClick={clear}
        className="text-white bg-[#676767] hover:bg-[#474646] ml-auto rounded-md p-3 bulge"
      >
        Clear Tasks
      </button>
    </>
  );
}

export default ClearListBtn;
