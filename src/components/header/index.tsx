import React, { useState } from "react";
import LoginDropdown from "../LoginDropdown";
import Sidebar from "./components/SideBar";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import "./style.scss";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarIsActive, setSidebarIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showSidebar = () => {
    setSidebarIsActive(!sidebarIsActive);
  };
  return (
    <div>
      <nav className="header">
        <div className="logo">
          <Link to="/"><h2>SpotAway</h2></Link>
        </div>

        <div className="containerItemsHeader">
          <div className="headerList">
            <ul>
            <li><Link to="/">Home</Link></li>
              <li>Emphasis</li>
              <li><Link to="/places">Explore</Link></li>
            </ul>
          </div>

          <div className="buttonLoginContainer">
            <button onClick={toggleDropdown}>Sign in</button>
            {isDropdownOpen && <LoginDropdown onClose={toggleDropdown} />}
          </div>

          {/* Botão de hambúrguer independente do Sidebar */}
          <div className="sidebarActive">
            <button onClick={showSidebar}>
              <AlignJustify size={30} />
            </button>
          </div>
        </div>

        {/* Renderiza o Sidebar se estiver ativo */}
        {sidebarIsActive && (
          <Sidebar
            setSidebarIsActive={setSidebarIsActive}
            sidebarIsActive={sidebarIsActive}
          />
        )}
      </nav>
    </div>
  );
}
export default Header;
