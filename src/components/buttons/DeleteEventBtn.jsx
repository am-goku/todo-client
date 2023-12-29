import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteEvent } from "../../services/apis/task-methods";
import { useDispatch } from "react-redux";
import { deleteOneEvent } from "../../utils/reducers/user-reducer";

function DeleteEventBtn({ eventId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const deleteEvnt = () => {
    deleteEvent(eventId)
      .then((res) => {
        dispatch(deleteOneEvent(eventId))
        navigate("/");
      })
      .catch((err) => {});
  };
  return (
    <>
      <button
        onClick={deleteEvnt}
        className="text-white bg-red-500 ml-auto rounded-md p-3 hover:bg-red-600 bulge"
      >
        Delete Event
      </button>
    </>
  );
}

export default DeleteEventBtn;
