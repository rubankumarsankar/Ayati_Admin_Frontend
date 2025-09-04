import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  ShieldCheckIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { CgMenuGridO } from "react-icons/cg";

import logo from "/logo.png"; // ✅ Replace with your company logo

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <HomeIcon className="h-6 w-6" /> },
    { name: "Employees", path: "/employees", icon: <UsersIcon className="h-6 w-6" /> },
    { name: "Roles", path: "/roles", icon: <ShieldCheckIcon className="h-6 w-6" /> },
  ];

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-white border-r border-gray-200 shadow-sm h-screen sticky top-0 flex flex-col transition-all duration-300`}
    >
      {/* Header / Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsCollapsed(!isCollapsed)} // ✅ Toggle on logo click
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full transition-transform duration-300 hover:scale-105"
          />
          {!isCollapsed && (
            <h1 className="font-bold text-xl text-gray-800">Admin Panel</h1>
          )}
        </div>

        {/* Menu Toggle Button (optional keep) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {/* <CgMenuGridO className="h-6 w-6 text-gray-600" /> */}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg mx-2 transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-black/80 hover:bg-gray-100"
                  }`}
                >
                  <span
                    className={`${
                      isActive ? "text-white" : "text-gray-500"
                    } ${isCollapsed ? "flex justify-center w-full" : ""}`}
                  >
                    {/* Larger icons when collapsed */}
                    {isCollapsed ? (
                      <div className="flex justify-center">
                        <item.icon.type className="h-7 w-7" />
                      </div>
                    ) : (
                      item.icon
                    )}
                  </span>
                  {!isCollapsed && (
                    <span className={`font-medium ${isActive ? "text-white" : ""}`}>
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / Settings */}
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/settings"
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "gap-3"
          } px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition`}
        >
          <Cog6ToothIcon className={`${isCollapsed ? "h-8 w-8" : "h-6 w-6"}`} />
          {!isCollapsed && <span className="font-medium">Settings</span>}
        </Link>

        {!isCollapsed && (
          <p className="mt-3 text-xs text-gray-500">© 2025 Company Name</p>
        )}
      </div>
    </aside>
  );
}
