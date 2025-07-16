import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // FastAPI backend URL

// ✅ Register Admin (Super Admin or Manager)
export const registerAdmin = async (data, token) => {
  try {
    const response = await axios.post(`${API_URL}/admins/register`, data, {
      headers: token
        ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
        : { "Content-Type": "application/json" }, // token optional (first super admin)
    });
    return response;
  } catch (error) {
    console.error("Error registering admin:", error);
    throw error;
  }
};

// ✅ Login Admin (returns JWT token)
export const loginAdmin = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/admins/login`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.error("Error logging in admin:", error);
    throw error;
  }
};

// ✅ Deactivate Admin (Super Admin only)
export const deactivateAdmin = async (token, adminId) => {
  try {
    const response = await axios.put(
      `${API_URL}/admins/deactivate/${adminId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    console.error("Error deactivating admin:", error);
    throw error;
  }
};
