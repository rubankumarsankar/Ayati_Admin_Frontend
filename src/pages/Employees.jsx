import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
} from "../api/employees";
import { getRoles } from "../api/roles"; // ✅ New API to fetch roles
import Swal from "sweetalert2";
import { Dialog } from "@headlessui/react";
import { PlusIcon, PencilIcon } from "@heroicons/react/24/solid";

export default function Employees() {
  const { token } = useContext(AuthContext);
  const [employees, setEmployees] = useState([]);
  const [roles, setRoles] = useState([]); // ✅ Store roles for dropdown
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role_id: "", // ✅ Use role_id instead of role name
  });

  // ✅ Fetch Employees
  const fetchEmployees = async () => {
    try {
      const res = await getEmployees(token, search);
      setEmployees(res);
    } catch (error) {
      Swal.fire("Error", error.detail || "Failed to fetch employees", "error");
    }
  };

  // ✅ Fetch Roles (for dropdown)
  const fetchRoles = async () => {
    try {
      const res = await getRoles(token);
      setRoles(res);
    } catch (error) {
      Swal.fire("Error", error.detail || "Failed to fetch roles", "error");
    }
  };

  useEffect(() => {
    fetchEmployees();
    fetchRoles();
  }, []);

  // ✅ Open Modal (Add/Edit)
  const handleOpenModal = (emp = null) => {
    setEditingEmployee(emp);
    setFormData(
      emp
        ? {
            name: emp.name,
            email: emp.email,
            phone: emp.phone,
            department: emp.department,
            role_id: emp.role_rel?.id || "", // ✅ Pre-fill role_id
          }
        : { name: "", email: "", phone: "", department: "", role_id: "" }
    );
    setIsModalOpen(true);
  };

  // ✅ Save Employee (Create or Update)
  const handleSave = async () => {
    try {
      if (!formData.role_id) {
        Swal.fire("Validation Error", "Please select a role", "warning");
        return;
      }

      if (editingEmployee) {
        await updateEmployee(token, editingEmployee.id, formData);
        Swal.fire("Updated!", "Employee updated successfully", "success");
      } else {
        await createEmployee(token, formData);
        Swal.fire("Added!", "Employee added successfully", "success");
      }
      setIsModalOpen(false);
      fetchEmployees();
    } catch (err) {
      Swal.fire(
        "Error!",
        err.detail || "Something went wrong. Try again.",
        "error"
      );
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <PlusIcon className="h-5 w-5" /> Add Employee
        </button>
      </div>

      {/* ✅ Search Bar */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search employees..."
          className="border p-2 rounded w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={fetchEmployees}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* ✅ Employees Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Phone</th>
              <th className="p-3 border-b">Department</th>
              <th className="p-3 border-b">Role</th>
              <th className="p-3 border-b text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{emp.name}</td>
                <td className="p-3 border-b">{emp.email}</td>
                <td className="p-3 border-b">{emp.phone}</td>
                <td className="p-3 border-b">{emp.department}</td>
                <td className="p-3 border-b">
                  {emp.role_rel?.name || "N/A"}
                </td>
                <td className="p-3 border-b text-right">
                  <button
                    onClick={() => handleOpenModal(emp)}
                    className="text-blue-500 hover:underline flex items-center gap-1"
                  >
                    <PencilIcon className="h-4 w-4" /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Add/Edit Modal */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {editingEmployee ? "Edit Employee" : "Add Employee"}
            </h2>
            <div className="space-y-3">
              {["name", "email", "phone", "department"].map((field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                />
              ))}

              {/* ✅ Role Dropdown */}
              <select
                value={formData.role_id}
                onChange={(e) =>
                  setFormData({ ...formData, role_id: e.target.value })
                }
                className="w-full border p-2 rounded"
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
