import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Event = {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
};

const API_URL = "https://localhost:7177/api/events";

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {
        axios.get(`${API_URL}/${id}`).then(res => setEvent(res.data));
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#232345" }}>{event.name}</h2>
            <div style={{ color: "#a87ffa", fontWeight: 700, fontSize: "1.3rem", margin: "16px 0" }}>{event.date}</div>
            <div style={{ color: "#989898", fontWeight: 600, fontSize: "1.2rem", marginBottom: "14px" }}>{event.location}</div>
            <div style={{ fontSize: "1.3rem", color: "#222", maxWidth: 500, margin: "0 auto" }}>{event.description}</div>
        </div>
    );
}

export default EventDetails;
