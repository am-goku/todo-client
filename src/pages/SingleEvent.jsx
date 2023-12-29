import React, { useEffect, useState } from 'react'
import Events from '../components/event/Events'
import AddTask from '../components/task/AddTask'
import { useParams } from 'react-router-dom';
import { getSingleEvent, getTasks } from '../services/apis/task-methods';

function SingleEvent() {
  const eventId = useParams().id;
  const [tasks, setTasks] = useState([])
  const [err, setErr] = useState('');

  const [event, setEvent ] = useState(null)

  useEffect(() => {
    getSingleEvent(eventId).then((res) => {
      setEvent(res)
    }).catch((err) => {
      setErr(err)
    })
  }, [eventId])

  
  useEffect(() => {
    getTasks(eventId).then((res) => {
      setTasks(res);
    }).catch((err) => {
      setErr(err?.message || 'Something went wrong.');
    })
  },[eventId])

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex gap-10">
        {tasks?.length > 0 && <Events event={event} tasks={tasks} setTasks={setTasks} />}
        <AddTask taskLength={tasks?.length} eventId={eventId} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default SingleEvent