import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://localhost:7177/api/events";

function CreateEvent() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post(API_URL, { title, date, location, description });
        navigate("/");
    };

    return (
        <div className="form-container">
            <h2>Create New Event</h2>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
                <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date (YYYY-MM-DD)" required />
                <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateEvent;
