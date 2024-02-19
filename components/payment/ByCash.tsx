import Link from "next/link";
import React from "react";

function ByCash() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 mt-10">Enjoy Our Service</h1>
      <Link
        onClick={() => alert("thank you")}
        className="py-2 px-4 border-2"
        href="/"
      >
        Confirm
      </Link>
    </div>
  );
}

export default ByCash;
