import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

type Event = {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
};

const API_URL = "http://localhost:5299/api/events";

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState<Event | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/${id}`).then(res => setEvent(res.data));
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginBottom: "22px",
                    background: "#a87ffa",
                    color: "#fff",
                    border: "none",
                    borderRadius: "7px",
                    padding: "10px 26px",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    boxShadow: "0 1px 10px #e5d5f855"
                }}
            >
                Back to events
            </button>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#232345" }}>{event.title}</h2>
            <div style={{ color: "#a87ffa", fontWeight: 700, fontSize: "1.3rem", margin: "16px 0" }}>{event.date}</div>
            <div style={{ color: "#989898", fontWeight: 600, fontSize: "1.2rem", marginBottom: "14px" }}>{event.location}</div>
            <div style={{ fontSize: "1.3rem", color: "#222", maxWidth: 500, margin: "0 auto" }}>{event.description}</div>
        </div>
    );
}

export default EventDetails;
