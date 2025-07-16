import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
} from "../../api/roles";
import Swal from "sweetalert2";
import { Dialog } from "@headlessui/react";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function Roles() {
  const { token } = useContext(AuthContext);
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });

  // ✅ Fetch Roles
  const fetchRoles = async () => {
    try {
      const res = await getRoles(token);
      setRoles(res); // ✅ FIXED: no need for `.data` if API already returns data
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.detail || "Failed to load roles",
        "error"
      );
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // ✅ Open Add/Edit Modal
  const handleOpenModal = (role = null) => {
    setEditingRole(role);
    setFormData(role ? { ...role } : { name: "", description: "" });
    setIsModalOpen(true);
  };

  // ✅ Create or Update Role
  const handleSave = async () => {
    if (!formData.name.trim()) {
      Swal.fire("Validation Error", "Role name is required", "warning");
      return;
    }

    try {
      if (editingRole) {
        await updateRole(token, editingRole.id, formData);
        Swal.fire("Updated!", "Role updated successfully", "success");
      } else {
        await createRole(token, formData);
        Swal.fire("Created!", "Role created successfully", "success");
      }
      setIsModalOpen(false);
      fetchRoles();
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.detail || "Something went wrong",
        "error"
      );
    }
  };

  // ✅ Delete Role
  const handleDelete = async (roleId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteRole(token, roleId);
          Swal.fire("Deleted!", "Role has been deleted.", "success");
          fetchRoles();
        } catch (error) {
          Swal.fire(
            "Error",
            error?.response?.data?.detail || "Failed to delete role",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Role Management</h1>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <PlusIcon className="h-5 w-5" /> Add Role
        </button>
      </div>

      {/* ✅ Roles Table */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Name</th>
              <th className="p-3 border-b">Description</th>
              <th className="p-3 border-b text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.length > 0 ? (
              roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{role.name}</td>
                  <td className="p-3 border-b">{role.description || "-"}</td>
                  <td className="p-3 border-b text-right space-x-2">
                    <button
                      onClick={() => handleOpenModal(role)}
                      className="text-blue-500 hover:underline inline-flex items-center"
                    >
                      <PencilIcon className="h-4 w-4 mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(role.id)}
                      className="text-red-500 hover:underline inline-flex items-center"
                    >
                      <TrashIcon className="h-4 w-4 mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center p-4 text-gray-500 italic"
                >
                  No roles found.
                </td>
              </tr>
            )}
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
              {editingRole ? "Edit Role" : "Add Role"}
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Role Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border p-2 rounded"
              />
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
