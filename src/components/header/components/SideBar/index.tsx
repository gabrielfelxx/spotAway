// components/SideBar.tsx
import React from "react";
import { X } from "lucide-react";
import './style.scss'
import { Link } from "react-router-dom";

interface SidebarProps {
  setSidebarIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarIsActive: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ setSidebarIsActive, sidebarIsActive }) => {
  return (
    <div className={`sidebar ${sidebarIsActive ? "active" : ""}`}>
      <div className="sidebar-header">
        <h4>Menu</h4>
        <button onClick={() => setSidebarIsActive(false)}>
          <X />
        </button>
      </div>
      <div className="sidebarContent">
        <ul className="itensSideBar">
        <li><Link to="/">Home</Link></li>
          <li>Emphasis</li>
          <li><Link to="/places">Explore</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
