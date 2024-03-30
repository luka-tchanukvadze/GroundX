"use client";
import React, { useRef } from "react";
import { useState } from "react";

function ImportantInfo() {
  const textRef = useRef<any>(null);
  const textRef2 = useRef<any>(null);
  const [importentInfo, setImportentInfo] = useState<boolean>(true);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Unable to copy text to clipboard", err);
    }
  };

  return (
    <div>
      {!importentInfo && (
        <button
          onClick={() => setImportentInfo(true)}
          className="w-full py-3 bg-red-600 text-white rounded-full mb-8 mt-2"
        >
          Important Information
        </button>
      )}
      {importentInfo && (
        <div className="bg-white dark:bg-gray-800 dark:text-blue-200 p-4 rounded-md mt- mb-8 ">
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

          <div className="flex justify-between content-center">
            <div className="w-1/2 flex content-center gap-2">
              <p>1.</p>
              <span className="truncate">
                Visättravägen 71, 141 50 Huddinge Municipality, Sweden
              </span>
            </div>
            <button
              className="px-2  border-2 text-blue-600 rounded-full  font-bold border-none active:text-blue-400"
              onClick={() =>
                handleCopy(
                  "Visättravägen 71, 141 50 Huddinge Municipality, Sweden"
                )
              }
            >
              Copy
            </button>
          </div>

          <div className="flex justify-between content-center">
            <div className="w-1/2 flex content-center gap-2">
              <p>2.</p>
              <span className="truncate">
                Visättra Backe 71, 141 58 Huddinge Municipality, Sweden
              </span>
            </div>
            <button
              className="px-2  border-2 text-blue-600 rounded-full  font-bold border-none active:text-blue-400"
              onClick={() =>
                handleCopy(
                  "Visättra Backe 71, 141 58 Huddinge Municipality, Sweden"
                )
              }
            >
              Copy
            </button>
          </div>
          <button
            onClick={() => setImportentInfo(false)}
            className="w-full my-4 border-2 py-2 bg-red-600 rounded-full text-white font-bold border-none"
          >
            Hide
          </button>
        </div>
      )}
    </div>
  );
}

export default ImportantInfo;
