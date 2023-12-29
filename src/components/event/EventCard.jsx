import React from "react";
import { useNavigate } from "react-router-dom";

function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/event/${event?._id}`)}
        className="aspect-square w-56 rounded-sm bulgeBox flex items-center justify-center text-center hover:animate-pulse cursor-pointer"
      >
        <span className="text-white font-mono font-semibold">
          {event?.eventName}
        </span>
      </div>
    </>
  );
}

export default EventCard;
