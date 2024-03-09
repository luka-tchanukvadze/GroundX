import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

function ByCash() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 mt-10">Enjoy Our Service</h1>
      <Link
        onClick={() =>
          Swal.fire({
            title: "Thank you!",
            text: "Feel free to leave a review",
            icon: "success",
          })
        }
        className="py-2 px-4 border-2 rounded-full"
        href="/"
      >
        Confirm
      </Link>
    </div>
  );
}

export default ByCash;
