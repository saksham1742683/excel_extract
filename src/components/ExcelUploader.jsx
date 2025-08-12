import React, { useState } from "react";
import { parseExcel } from "../utils/parseExcel";
import TableDisplay from "./TableDisplay";
import { FaFileExcel } from "react-icons/fa";

export default function ExcelUploader() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      parseExcel(file, setData);
    }
  };

  return (
    <div className="space-y-6">
      <label className="flex flex-col items-center justify-center w-full p-4 sm:p-6 border-2 border-dashed border-blue-400 rounded-xl cursor-pointer hover:bg-blue-50 transition">
        <FaFileExcel className="text-green-600 text-4xl sm:text-5xl mb-3" />
        <span className="text-base sm:text-lg font-medium text-gray-700 text-center">
          Click or drag & drop Excel file
        </span>
        <span className="text-xs sm:text-sm text-gray-500 mt-1">
          .xlsx or .xls supported
        </span>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>

      <TableDisplay data={data} />
    </div>
  );
}
