import { Home, Ticket, Calendar, ClipboardList } from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../assets/ventixe-logo.svg";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Ventixe Logo" className={styles.logo} />
            </div>
            <nav className={styles.nav}>
                <NavLink to="/events" className={styles.navItem}>
                    <Calendar size={20} />
                    Upcoming Events
                </NavLink>
                <NavLink to="/book" className={styles.navItem}>
                    <Ticket size={20} />
                    Book Event
                </NavLink>

                <div className={styles.sectionLabel}>
                    Admin Tools
                </div>

                <NavLink to="/" className={styles.navItem}>
                    <Home size={20} />
                    Overview        
                </NavLink>
                <NavLink to="/create" className={`${styles.navItem} ${styles.adminLink}`}>
                    <ClipboardList size={20} />
                    Admin: Create Event
                </NavLink>
            </nav>
        </div>
    );
}

export default Sidebar;
