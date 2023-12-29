import React, { useEffect, useState } from "react";
import AddEvent from "../components/event/AddEvent";
import { getEvents } from "../services/apis/task-methods";
import { useDispatch, useSelector } from "react-redux";
import { setUserEvents } from "../utils/reducers/user-reducer";
import EventCard from "../components/event/EventCard";

function Home() {
  const dispatch = useDispatch();
  const [eventsSet, setEvents] = useState([])
  const events = useSelector((state) => state?.user?.userEvents)

  useEffect(() => {
    getEvents().then((res) => {
      dispatch(setUserEvents(res));
    })
  }, [dispatch]);

  useEffect(() => {
    setEvents(events)
  }, [events])


  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="grid grid-cols-5 gap-10">
        <AddEvent />
        {events?.length === 0 && (
          <span className="self-center font-bold text-2xl font-mono select-none">
            Create a new event
          </span>
        )}

        {events &&
          (events?.length > 0
            ? events?.map((event, index) => {
                return <EventCard event={event} key={index} />;
              })
            : null)}
      </div>
    </div>
  );
}

export default Home;
