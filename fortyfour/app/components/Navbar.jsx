// app/components/Navbar.jsx
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-black px-6 py-4 shadow-lg flex justify-between items-center">
      <div className="text-2xl font-bold text-white glow-text">⚡ MyGlowSite</div>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
