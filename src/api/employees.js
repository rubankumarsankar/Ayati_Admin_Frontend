import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

// ✅ Helper to handle errors consistently
const handleError = (error, defaultMessage) => {
  console.error(defaultMessage, error);
  throw error.response?.data || { detail: defaultMessage };
};

// ✅ Get Employees (Search + Pagination)
export const getEmployees = async (token, search = "", skip = 0, limit = 10) => {
  try {
    const response = await axios.get(
      `${API_URL}/employees?search=${encodeURIComponent(search)}&skip=${skip}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // return data directly for convenience
  } catch (error) {
    handleError(error, "Error fetching employees");
  }
};

// ✅ Create New Employee
export const createEmployee = async (token, data) => {
  try {
    const response = await axios.post(`${API_URL}/employees`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Error creating employee");
  }
};

// ✅ Update Existing Employee
export const updateEmployee = async (token, employeeId, data) => {
  try {
    const response = await axios.put(`${API_URL}/employees/${employeeId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Error updating employee");
  }
};

// ✅ Delete Employee
export const deleteEmployee = async (token, employeeId) => {
  try {
    const response = await axios.delete(`${API_URL}/employees/${employeeId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    handleError(error, "Error deleting employee");
  }
};
