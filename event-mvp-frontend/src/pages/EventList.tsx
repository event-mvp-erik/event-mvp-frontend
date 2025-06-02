import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Event = {
  id: number;
  name: string;
  date: string;
};

const API_URL = "https://localhost:7177/api/events";

<button onClick={() => navigate("/create")}>+ Add Event</button>

function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_URL).then(res => setEvents(res.data));
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="event-grid">
      {events.map(ev => (
        <div className="event-card" key={ev.id} onClick={() => handleCardClick(ev.id)}>
          <div className="event-title">{ev.name}</div>
          <div className="event-date">{ev.date}</div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
