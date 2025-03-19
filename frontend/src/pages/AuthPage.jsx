import React, { useState } from "react";
import { login, signup } from "../api/auth";
import { useNavigate } from "@tanstack/react-router";
import useAuthStore from "../store/authStore";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();
  const { login: storeLogin } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const { access_token } = await login(email, password);
      storeLogin({ email }, access_token);
      navigate({ to: "/dashboard" });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await signup(email, password);
      // Switch to login tab after signup
      setActiveTab("login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`font-semibold text-lg ${
              activeTab === "login"
                ? "border-b-2 border-[#6C9BCF] text-[#333333]"
                : "text-[#666666]"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`font-semibold text-lg ${
              activeTab === "signup"
                ? "border-b-2 border-[#6C9BCF] text-[#333333]"
                : "text-[#666666]"
            }`}
          >
            Signup
          </button>
        </div>
        {activeTab === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
            />
            <div className="text-right">
              <a href="#" className="text-sm text-[#6C9BCF] hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#6C9BCF] text-white rounded hover:bg-blue-500"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#6C9BCF] text-white rounded hover:bg-blue-500"
            >
              Signup
            </button>
          </form>
        )}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-sm text-[#666666]">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-around">
          <button className="py-2 px-4 border rounded hover:bg-[#F5F5F5]">
            Google
          </button>
          <button className="py-2 px-4 border rounded hover:bg-[#F5F5F5]">
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}
