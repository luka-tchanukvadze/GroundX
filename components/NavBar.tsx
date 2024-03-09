"use client";
import React, { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Image from "next/image";

function NavBar() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", "true");
      window.document.documentElement.classList.add("dark");
    } else if (darkMode === false) {
      localStorage.setItem("darkMode", "false");
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    }
  }, [darkMode]);
  console.log(darkMode);

  const path = usePathname().toString();
  console.log("path", path);
  return (
    <div className="flex justify-around py-6 items-center border-b-2">
      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          <p className="text-violet-800 font-extrabold">GroundX</p>
        </Link>
        {path.startsWith("/rent-car") ? null : (
          <Link href="/rent-car">Rent car</Link>
        )}
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button
          className={`flex items-center justify-center bg-gray-500 p-1 rounded-full hover:rotate-[360deg] transition-all delay-100 ease-in-out`}
          onClick={switchMode}
        >
          {darkMode ? (
            <img src={"./sun.svg"} alt="sun" width={25} height={25} />
          ) : (
            <img src={"./moon.svg"} alt="moon" width={25} height={25} />
          )}{" "}
        </Button>

        <Link
          href="/project-info
      "
        >
          About
        </Link>

        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default NavBar;

const Button = styled.button``;
