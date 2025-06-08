import "../styles/Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Dashboard</h1>

            <div className="dashboard-cards">
                <div className="card">
                    <div className="card-label">Total Events</div>
                    <div className="card-value">7</div>
                </div>
                <div className="card">
                    <div className="card-label">Total Bookings</div>
                    <div className="card-value">24</div>
                </div>
                <div className="card">
                    <div className="card-label">Upcoming Events</div>
                    <div className="card-value">2</div>
                </div>
            </div>

            <div className="dashboard-section">
                <h2>Upcoming</h2>
                <div className="event-preview">
                    <div className="event-preview-title">Tech Meetup 2025</div>
                    <div className="event-preview-info">July 4, 2025 - Gothenburg</div>
                </div>
                <div className="event-preview">
                    <div className="event-preview-title">React Conference</div>
                    <div className="event-preview-info">August 18, 2025 - Stockholm</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
