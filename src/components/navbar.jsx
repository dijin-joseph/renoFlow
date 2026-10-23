import "./navbar.css";
import { ChevronDown, Menu } from "lucide-react";
import renoFlowLogo from "../assets/renoFlowLogo.png";

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>

          <img className="logoImage" src={renoFlowLogo} alt="RenoFlow Logo" />
        </div>
        <div className="navbar-content">
          <div className="profile-initials">DJ</div>
          <span className="profile-name">Dijin Joseph</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </>
  );
}
