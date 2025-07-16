import { Link } from "react-router-dom";
import { UsersIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="text-gray-500 mt-1">Quick access to management tools</p>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Employees Card */}
        <Link
          to="/employees"
          className="bg-white shadow-lg rounded-lg p-5 flex items-center gap-4 hover:shadow-xl transition"
        >
          <div className="bg-blue-100 p-3 rounded-full">
            <UsersIcon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Manage Employees
            </h2>
            <p className="text-sm text-gray-500">View, add, or update employees</p>
          </div>
        </Link>

        {/* Reports (Example Feature) */}
        <div className="bg-white shadow-lg rounded-lg p-5 flex items-center gap-4 opacity-70 cursor-not-allowed">
          <div className="bg-green-100 p-3 rounded-full">
            <ClipboardDocumentListIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Reports</h2>
            <p className="text-sm text-gray-500">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
