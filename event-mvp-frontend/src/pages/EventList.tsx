import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Event = {
    id: number;
    title: string;
    date: string;
};

function EventList() {
    const [events, setEvents] = useState<Event[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:5299/api/events")
            .then(res => setEvents(res.data))
            .catch(err => {
                console.error("Failed to fetch events:", err);
            });
    }, []);

    const handleCardClick = (id: number) => {
        navigate(`/event/${id}`);
    };

    return (
        <div className="event-grid">
            {events.map(ev => (
                <div className="event-card" key={ev.id} onClick={() => handleCardClick(ev.id)}>
                    <div className="event-title">{ev.title}</div>
                    <div className="event-date">{ev.date}</div>
                </div>
            ))}
        </div>
    );
}

export default EventList;
