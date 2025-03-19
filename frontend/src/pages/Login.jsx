import React from "react";
import { useNavigate } from "@tanstack/react-router";
import useAuthStore from "../store/authStore";
import { login } from "../api/auth";

export default function Login() {
  const navigate = useNavigate();
  const { login: storeLogin } = useAuthStore();

  const handleSubmit = async (e) => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-[#333333] mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>
    </div>
  );
}
