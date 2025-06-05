import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import CreateBooking from "./pages/CreateBooking";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ flex: 1, padding: "32px" }}>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/events" element={<EventList />} />
                        <Route path="/event/:id" element={<EventDetails />} />
                        <Route path="/create" element={<CreateEvent />} />
                        <Route path="/book" element={<CreateBooking />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
