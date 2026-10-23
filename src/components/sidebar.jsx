import "./sidebar.css";
import { LayoutDashboard, FolderKanban, Settings } from "lucide-react";
export function Sidebar() {
  return (
    <>
      <div className="sidebar-menu">
        <ul className="sidebar-content">
          <li className="layoutDashboard">
            <LayoutDashboard size={20} />
            Dashboard
          </li>
          <li className="folderKanban">
            <FolderKanban size={20} />
            Projects
          </li>
          <li className="settings">
            {" "}
            <Settings size={20} />
            Settings
          </li>
        </ul>
      </div>
    </>
  );
}
