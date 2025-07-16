import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import logo from "/logo.png"; // ✅ Replace with your company logo

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "Employees", path: "/employees", icon: <UsersIcon className="h-5 w-5" /> },
    { name: "Roles", path: "/roles", icon: <UsersIcon className="h-5 w-5" /> }

  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white shadow-md h-screen sticky top-0 transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {isCollapsed ? (
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 mx-auto rounded-full"
          />
        ) : (
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded-full" />
            <h1 className="font-bold text-lg text-gray-800">Admin Panel</h1>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded hover:bg-gray-100"
        >
          <Bars3Icon className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4">
        <ul>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 transition-all ${
                    isActive
                      ? "bg-blue-500 text-white rounded-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
