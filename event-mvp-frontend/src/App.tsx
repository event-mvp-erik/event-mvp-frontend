import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import CreateEvent from "./pages/CreateEvent";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="main-bg">
                <div className="sidebar">
                    <div className="sidebar-logo">X</div>
                    <div className="sidebar-menu">
                        <Link to="/" className="sidebar-item">Events</Link>
                        <Link to="/create" className="sidebar-item">+ Create Event</Link>
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <h1 className="page-title">Events</h1>
                                <EventList />
                            </>
                        } />
                        <Route path="/event/:id" element={<EventDetails />} />
                        <Route path="/create" element={<CreateEvent />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
