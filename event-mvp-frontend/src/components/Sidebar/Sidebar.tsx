import { Link, useLocation } from "react-router-dom";
import { CalendarDays, Home, ListTodo, Ticket } from "lucide-react";
import styles from "./Sidebar.module.css";

function Sidebar() {
    const location = useLocation();

    const navItems = [
        { name: "Dashboard", path: "/", icon: <Home size={20} /> },
        { name: "Bookings", path: "/book", icon: <Ticket size={20} /> },
        { name: "Events", path: "/events", icon: <CalendarDays size={20} /> },
        { name: "Admin: Add Event", path: "/create", icon: <ListTodo size={20} /> }
    ];

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>X</div>
            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ""
                            }`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;
