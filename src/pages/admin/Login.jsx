import { useState, useContext } from "react";
import { loginAdmin } from "../../api/auth";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";
// ✅ If you want to decode role dynamically, install & import jwt-decode
// import jwtDecode from "jwt-decode";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginAdmin({ email, password });
      const token = res.data.access_token;

      // ✅ Decode role dynamically (optional)
      // const decoded = jwtDecode(token);
      // const role = decoded?.role || "admin";

      const role = "admin"; // Hardcoded until you add jwt-decode
      login(token, { email, role });

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${email}!`,
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          err.response?.data?.detail || "Invalid email or password! Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-medium text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-500">
            Sign in to manage employees & admins
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black/80 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              // value="admin@admin.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            />
          </div>

          {/* Password with Eye Toggle */}
          <div className="relative">
            <label className="block text-sm font-medium text-black/80 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              // value="Admin@123"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-9 text-gray-500 hover:text-black/80"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
      </div>
    </div>
  );
}
