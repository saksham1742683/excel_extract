import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function TableDisplay({ data }) {
  if (!data.length) return null;

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-blue-600 text-white sticky top-0">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="px-6 py-3 font-semibold">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`transition hover:bg-blue-50 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {Object.values(row).map((val, j) => (
                <td key={j} className="px-6 py-3 border-t border-gray-200">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-end p-4 bg-gray-50 border-t border-gray-200">
        <FaCheckCircle className="text-green-500 mr-2" />
        <span className="text-sm text-gray-700">
          {data.length} rows loaded successfully
        </span>
      </div>
    </div>
  );
}
