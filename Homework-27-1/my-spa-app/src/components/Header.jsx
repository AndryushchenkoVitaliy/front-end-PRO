import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/contacts">Контакти</NavLink>
        <NavLink to="/about">Про мене</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}