// services/api.js
import axios from "axios";

export const Contactform = async (formData) => {
  try {
    const response = await axios.post("https://ayatiworks.com/Api/contactlead.php?name=ruban&mobile=8111040614&email=rubankumar@ayatiworks.com&budget=Below%20$1000&message=Hii&services=Social%20Media%20Marketing,SEO%20and%20Content%20Marketing,Influencer%20Marketing,Website%20%26%20Landing%20Pages", formData);
    return response.data;
  } catch (error) {
    console.error("Contactform API Error:", error);
    return { success: false };
  }
};
