// components/SideBar.tsx
import React from "react";
import { X } from "lucide-react";

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
      <div className="sidebar-content">
        {/* Adicione os itens do menu aqui */}
        <ul>
          <li>Home</li>
          <li>Emphasis</li>
          <li>Category</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
