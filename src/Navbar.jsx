
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");

  const links = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Experience",
    "Projects",
    "Coding Profiles",
    "Achievements",
    "Contact",
  ];

  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#home" className="logo">
  hey, it's harini<span>!</span>
</a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link}
             href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={active === link ? "active" : ""}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;