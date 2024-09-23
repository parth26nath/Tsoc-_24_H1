// DashboardNavbar.js
import { Link } from 'react-router-dom';

export default function DashboardNavbar() {
    return (
        <nav className="bg-blue-600 p-4">
            <ul className="flex space-x-4">
                <li><Link to="/cmanage" className="text-white">content manage</Link></li>
                <li><Link to="/cc" className="text-white">content creation</Link></li>
                <li><Link to="/settings" className="text-white">Settings</Link></li>
                <li><Link to="/" className="text-white">Logout</Link></li>
            </ul>
        </nav>
    );
}
