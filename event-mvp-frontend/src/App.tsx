import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="main-bg">
                <div className="sidebar">
                    <div className="sidebar-logo">X</div>
                    <div className="sidebar-menu">
                        <div className="sidebar-item active">Events</div>
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
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
