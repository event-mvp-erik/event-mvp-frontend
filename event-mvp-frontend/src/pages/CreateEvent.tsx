import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5299/api/events", {
                title: name,
                date,
                location,
                description,
            });
            navigate("/");
        } catch (err) {
            console.error("Error creating event", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Title" required />
            <input value={date} onChange={e => setDate(e.target.value)} placeholder="Date" required />
            <input value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <button type="submit">Create Event</button>
        </form>
    );
}

export default CreateEvent;
