import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

// ✅ Get Roles
export const getRoles = async (token) => {
  const res = await axios.get(`${API_URL}/roles`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// ✅ Create Role
export const createRole = async (token, data) => {
  return await axios.post(`${API_URL}/roles`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// ✅ Update Role
export const updateRole = async (token, roleId, data) => {
  return await axios.put(`${API_URL}/roles/${roleId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// ✅ Delete Role
export const deleteRole = async (token, roleId) => {
  return await axios.delete(`${API_URL}/roles/${roleId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
