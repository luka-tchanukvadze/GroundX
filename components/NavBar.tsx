"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const path = usePathname().toString();
  console.log("path", path);
  return (
    <div className="flex justify-around py-6 items-center border-b-2">
      <Link href="/">
        <p>LOGO</p>
      </Link>
      {path === "/" && (
        <div className="hidden md:flex gap-2">
          <h2 className="hover:bg-gray-100 p-2 cursor-pointer transition-all">
            Home
          </h2>
          <h2 className="hover:bg-gray-100 p-2 cursor-pointer transition-all">
            History
          </h2>
          <h2 className="hover:bg-gray-100 p-2 cursor-pointer transition-all">
            Help
          </h2>
        </div>
      )}
      {path.startsWith("/rent-car") && (
        <Link href="/special-offer">Special Offer</Link>
      )}
      {path.startsWith("/rent-car") ? null : (
        <Link href="/rent-car">rent a car</Link>
      )}
      {/* <Link href="/rent-car">rent a car</Link> */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default NavBar;
