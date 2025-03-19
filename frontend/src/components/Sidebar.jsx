import React from "react";
import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen p-6 shadow">
      <nav className="space-y-4">
        <Link to="/dashboard" className="block text-[#333333] hover:text-[#6C9BCF]">
          Tasks
        </Link>
        <Link to="/projects" className="block text-[#333333] hover:text-[#6C9BCF]">
          Projects
        </Link>
        <Link to="/calendar" className="block text-[#333333] hover:text-[#6C9BCF]">
          Calendar
        </Link>
        <Link to="/settings" className="block text-[#333333] hover:text-[#6C9BCF]">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
