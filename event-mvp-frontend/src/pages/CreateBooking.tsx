import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/CreateBooking.css";
import { apiUrls } from "../config";

type Event = {
    id: number;
    title: string;
    date: string;
};

function CreateBooking() {
    const [eventId, setEventId] = useState<number | null>(null);
    const [attendeeName, setAttendeeName] = useState("");
    const [email, setEmail] = useState("");
    const [numberOfSeats, setNumberOfSeats] = useState<number | "">("");
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        axios.get(`${apiUrls.eventsApi}/events`).then(res => setEvents(res.data));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!eventId) return alert("Please select an event.");

        try {
            await axios.post(`${apiUrls.bookingsApi}/bookings`, {
                eventId,
                attendeeName,
                email,
                numberOfSeats
            });
            alert("Booking created!");
        } catch (err) {
            console.error("Error creating booking", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <select value={eventId ?? ""} onChange={e => setEventId(Number(e.target.value))} required>
                <option value="">Select Event</option>
                {events.map(ev => (
                    <option key={ev.id} value={ev.id}>
                        {ev.title} ({ev.date})
                    </option>
                ))}
            </select>
            <input value={attendeeName} onChange={e => setAttendeeName(e.target.value)} placeholder="Your name" required />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <select value={numberOfSeats} onChange={e => setNumberOfSeats(Number(e.target.value))} required>
                <option value="">Select number of seats</option>
                {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}
                    </option>
                ))}
            </select>
            <button type="submit">Book Event</button>
        </form>
    );
}

export default CreateBooking;
