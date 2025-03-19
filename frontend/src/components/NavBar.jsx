import React from "react";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <div className="text-xl font-bold text-[#6C9BCF]">TaskApp</div>
      <div className="flex items-center space-x-4">
        {/* Replace with proper icons or images as needed */}
        <Link to="/notifications" className="text-[#333333]">
          <span>🔔</span>
        </Link>
        <Link to="/profile" className="text-[#333333]">
          <span>👤</span>
        </Link>
      </div>
    </nav>
  );
}
