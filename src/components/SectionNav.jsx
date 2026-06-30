import { NavLink } from "react-router-dom";

export default function SectionNav() {
  return (
    <nav className="section-nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? "is-active" : ""}>
        Home
      </NavLink>

      <NavLink to="/dashboard" className={({ isActive }) => isActive ? "is-active" : ""}>
        Dashboard
      </NavLink>

      <NavLink to="/media" className={({ isActive }) => isActive ? "is-active" : ""}>
        Media
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => isActive ? "is-active" : ""}>
        Contact
      </NavLink>
    </nav>
  );
}