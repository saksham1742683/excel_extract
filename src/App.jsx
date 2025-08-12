import React from "react";
import ExcelUploader from "./components/ExcelUploader";
import { FaTable } from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <header className="bg-blue-600 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center space-x-3">
          <FaTable className="text-white text-2xl sm:text-3xl" />
          <h1 className="text-lg sm:text-2xl font-bold text-white">
            Excel to Table Viewer
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200">
          <ExcelUploader />
        </div>
      </main>
    </div>
  );
}
