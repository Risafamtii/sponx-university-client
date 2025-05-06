import React, { useState } from "react";
import { assets } from "../assets/assets";
import { loginUser } from '../../src/utils/api/auth';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import '../assets/css/LoginPage.css'; // Create this file for animations

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await loginUser(formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.success("Login successful!");
          
      const userType = response.data.user.role.toLowerCase();
      navigate(`/${userType}/overview`);

    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = "Login failed, Please try again.";

      if (error.response) {
        switch (error.response.status) {
          case 401:
            errorMessage = "Invalid email or password";
            break;
          case 403:
            errorMessage = "Account is blocked. Please contact support.";
            break;
          default:
            errorMessage = error.response.data?.message || errorMessage;
        }
      } else {
        errorMessage = error.message || "An unexpected error occurred.";
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col-reverse w-full max-w-4xl bg-white rounded-lg shadow-2xl md:flex-row">
        {/* Left Side with Professional Bouncing Logo */}
        <div className="flex items-center justify-center w-full p-6 rounded-t-lg bg-blue-50 md:w-1/2 md:rounded-none md:rounded-l-lg">
          <div className="flex flex-col items-center text-center text-white">
            <div className="relative w-40 h-40 mb-4 md:w-64 md:h-64">
              <img
                src={assets.logo}
                alt="Logo"
                className="absolute inset-0 w-full h-full animate-professional-bounce"
              />
              <div className="absolute bottom-0 w-16 h-1 transform -translate-x-1/2 bg-blue-900 rounded-full left-1/2 md:w-24 animate-subtle-expand"></div>
            </div>
            <p className="mt-4 text-sm text-blue-950 md:text-base">
              Unlock a world of opportunities.
              <span className="block">
                Log in to explore and stay connected.
              </span>
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full p-6 md:p-10 md:w-1/2">
          <h2 className="mb-4 text-lg font-semibold md:text-xl">Login to your account</h2>
          <p className="mb-6 text-sm text-gray-600 md:text-base">Welcome to UPNECT!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200 md:text-base ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200 md:text-base ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 text-white rounded-md bg-sky-950 hover:bg-gray-800 focus:outline-none ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            {/* <button
              type="button"
              className="flex items-center justify-center w-full py-2 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              <img
                src={assets.google}
                alt="Google"
                className="w-4 h-4 mr-2 md:w-5 md:h-5"
              />
              Continue with Google
            </button> */}
            <button
              type="button"
              className="flex items-center justify-center w-full py-2 text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none"
            >
              Forgot password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;