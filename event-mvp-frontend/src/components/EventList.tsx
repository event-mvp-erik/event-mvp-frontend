import React, { useEffect, useState } from "react";
import axios from "axios";

export type EventDto = {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
};

const API_URL = "https://localhost:7177/api/events";

export const EventList: React.FC = () => {
    const [events, setEvents] = useState<EventDto[]>([]);
    const [selected, setSelected] = useState<EventDto | null>(null);

    useEffect(() => {
        axios.get<EventDto[]>(API_URL).then(res => {
            setEvents(res.data);
        });
    }, []);

    if (selected) {
        return (
            <div>
                <button onClick={() => setSelected(null)}>Back</button>
                <h2>{selected.name}</h2>
                <p><b>Date:</b> {selected.date}</p>
                <p><b>Location:</b> {selected.location}</p>
                <p>{selected.description}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Events</h1>
            <ul>
                {events.map(ev => (
                    <li key={ev.id}>
                        <button onClick={() => setSelected(ev)}>
                            {ev.name} ({ev.date})
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
