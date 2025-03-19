import React, { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved");
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-[#333333] mb-6">Settings</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#6C9BCF] mb-2">
          Account Settings
        </h2>
        {/* Add account setting fields as needed */}
        <p className="text-[#333333]">Email: user@example.com</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#6C9BCF] mb-2">
          Notifications
        </h2>
        <div className="flex items-center">
          <span className="text-[#333333] mr-2">Enable Notifications</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="sr-only"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-[#6C9BCF]"></div>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-[#6C9BCF] mb-2">
          App Preferences
        </h2>
        <div className="flex items-center">
          <span className="text-[#333333] mr-2">Dark Mode</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full"></div>
          </label>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="py-2 px-4 bg-[#6C9BCF] text-white rounded hover:bg-blue-500"
      >
        Save
      </button>
    </div>
  );
}
