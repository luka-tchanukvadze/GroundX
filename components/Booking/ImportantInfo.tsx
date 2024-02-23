"use client";
import React from "react";
import { useState } from "react";

function ImportantInfo() {
  const [importentInfo, setImportentInfo] = useState<boolean>(false);
  return (
    <div>
      {!importentInfo && (
        <button
          onClick={() => setImportentInfo(true)}
          className="w-full py-3 bg-red-600 text-white rounded-full my-4"
          // className="w-full my-4 border-2 py-2 bg-blue-700 rounded-xl border-none text-white font-bold"
        >
          Important Information
        </button>
      )}
      {importentInfo && (
        <div className="bg-white dark:bg-gray-800 dark:text-blue-200 p-4 rounded-md my-4 ">
          <p className="text-red-600 mb-2">
            **Important Notice:**
            <br />
            Map search is mainly limited to the United States due to API
            restrictions.
          </p>
          <p className="mb-2">
            As a workaround, I suggest using the following example addresses for
            testing purposes:
          </p>
          <ul className="list-decimal pl-4">
            <li>Visättravägen 71, 141 50 Huddinge Municipality, Sweden</li>
            <li>Visättra Backe 71, 141 58 Huddinge Municipality, Sweden</li>
          </ul>
          <button
            onClick={() => setImportentInfo(false)}
            className="w-full my-4 border-2 py-2 bg-red-500 text-white font-bold rounded-xl border-none"
          >
            Hide
          </button>
        </div>
      )}
    </div>
  );
}

export default ImportantInfo;
