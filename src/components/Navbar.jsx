import { useState, useContext, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire("Logged out!", "You have been logged out.", "success");
        navigate("/");
      }
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      {/* Brand */}
      <h1 className="font-medium text-xl text-blue-600 tracking-wide">
        Admin Dashboard
      </h1>

      {/* User Profile Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition border border-gray-200"
        >
          <UserCircleIcon className="h-6 w-6 text-black/80" />
          <span className="hidden sm:block text-black/80 font-medium">
            {user?.email || "User"}
          </span>
          <ChevronDownIcon
            className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fadeIn">
            <ul className="py-2 text-sm text-black/80">
              <li>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    Swal.fire("Profile", "Profile page coming soon!", "info");
                  }}
                  className="w-full text-left px-5 py-2 hover:bg-gray-50 transition"
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-5 py-2 text-red-600 hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
