import React from "react";
import { assets } from "../assets/assets";

const LoginPage = () => {

  React.useEffect(() => {
    // Prevent scrolling when the login page is open
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scrolling when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col-reverse w-full max-w-4xl bg-white rounded-lg shadow-2xl md:flex-row">
        {/* Left Side with Bouncing Logo */}
        <div className="flex items-center justify-center w-full p-6 rounded-t-lg bg-blue-50 md:w-1/2 md:rounded-none md:rounded-l-lg">
          <div className="flex flex-col items-center text-center text-white">
            <div className="relative w-32 h-32 mb-4 md:w-full md:h-64">
              <img
                src={assets.logo}
                alt="Logo"
                className="absolute inset-0 w-full h-full animate-slowBounce"
              />
              {/* Line under the logo */}
              <div className="absolute bottom-0 w-12 h-1 transform -translate-x-1/2 bg-blue-900 rounded-full left-1/2 md:w-20 animate-line-appear"></div>
            </div>
            <p className="mt-2 text-sm text-blue-950 md:text-base">
              Unlock a world of opportunities.
              <span className="block">
                Log in to explore and stay connected.
              </span>
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full p-15 md:p-10 md:w-1/2">
          <h2 className="mb-4 text-lg font-semibold md:text-xl">
            Login to your account
          </h2>
          <p className="mb-6 text-sm text-gray-600 md:text-base">
            Welcome to UPNECT!
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200 md:text-base"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200 md:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white rounded-md bg-sky-950 hover:bg-gray-800 focus:outline-none"
            >
              Login
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-full py-2 text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none"
            >
              <img
                src={assets.google}
                alt="Google"
                className="w-4 h-4 mr-2 md:w-5 md:h-5"
              />
              Continue with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full py-2 text-black bg-white rounded-md hover:bg-gray-200 focus:outline-none"
            >
              Forgot password
            </button>
          </form>
          <p className="mt-4 text-sm md:text-base">
            Create an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>

  return (
  <div>
    Login Page
  </div>


  );
};

export default LoginPage;
