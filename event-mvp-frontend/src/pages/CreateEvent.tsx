import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/CreateEvent.css";
import { apiUrls } from "../config";

function CreateEvent() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post(`${apiUrls.eventsApi}/events`, {
            title, date, location, description
        });
        navigate("/events");
    };

    return (
        <form onSubmit={handleSubmit} className="create-event-form">
            <h2>Create New Event</h2>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
            <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Create Event</button>
        </form>
    );
}

export default CreateEvent;
