import { Menu, MoveUpRight, X } from "lucide-react";
import logo from "../assets/Logo/89D4AA06-811C-483D-8555-19D17C622C6F Background Removed.png";
import { GOOGLE_FORM_URL, navItems } from "../data/site";

export function Header({ currentPage, menuOpen, onToggleMenu, onNavigate }) {
  return (
    <header className="topbar">
      <button
        className="brand"
        onClick={() => onNavigate("home")}
        aria-label="Throttle Shifters home"
      >
        <img className="brand-logo" src={logo} alt="Throttle Shifters logo" />
      </button>
      <nav
        className={`nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <button
            className={currentPage === item.path ? "active" : ""}
            key={item.path}
            onClick={() => onNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
        <a
          className="register-button"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Join the community <MoveUpRight size={15} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
