// services/api.js
import axios from "axios";

export const Contactform = async (formData) => {
  try {
    const response = await axios.post("https://ayatiworks.com/api/contact", formData);
    return response.data;
  } catch (error) {
    console.error("Contactform API Error:", error);
    return { success: false };
  }
};
