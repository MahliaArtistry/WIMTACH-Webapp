import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onContrastToggle, isHighContrast }) => {
  const [language, setLanguage] = useState("English");
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  const resources = [
    { name: "Emergency Kit Checklist", description: "Ensure you have all the essentials.", link: "/resources/emergency-kit" },
    { name: "Evacuation Plan", description: "Create a plan for your family.", link: "/resources/evacuation-plan" },
    { name: "First Aid Guide", description: "Basic first aid tips and tricks.", link: "/resources/first-aid" },
    { name: "Community Resources", description: "Find local shelters and aid.", link: "/resources/community" },
  ];

  return (
    <header className={`header ${isHighContrast ? "high-contrast" : ""}`}>
      <div className="logo">PreparedToronto</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="header-controls">
        <select
          aria-label="Language selector"
          value={language}
          onChange={handleLanguageChange}
          className="language-selector"
        >
          <option value="English">English</option>
          <option value="French">Français</option>
          <option value="Spanish">Español</option>
          <option value="Mandarin">中文</option>
        </select>

        <button
          aria-label="Toggle high contrast mode"
          className="contrast-toggle"
          onClick={onContrastToggle}
        >
          {isHighContrast ? "Normal Mode" : "High Contrast"}
        </button>

        <button
          aria-label="Toggle burger menu"
          className="burger-menu-toggle"
          onClick={toggleBurgerMenu}
        >
          ☰
        </button>
      </div>

      {isBurgerMenuOpen && (
        <div className="burger-menu">
          {resources.map((resource, index) => (
            <Link key={index} to={resource.link} className="burger-menu-item">
              {resource.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;