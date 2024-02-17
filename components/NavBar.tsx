"use client";
import React, { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

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
      <Link href="/">
        <p>LOGO</p>
      </Link>

      {path.startsWith("/rent-car") && (
        <Link href="/special-offer">Special Offer</Link>
      )}
      {path.startsWith("/rent-car") ? null : (
        <Link href="/rent-car">rent a car</Link>
      )}

      <Button
        className={`flex items-center justify-center  bg-gray-400 p-2 rounded-full hover:rotate-[360deg] transition-all delay-100 ease-in-out`}
        onClick={switchMode}
      >
        {/* <Button
        className={`flex items-center justify-center  bg-blue-900 p-2 rounded-full hover:rotate-[180] `}
        onClick={switchMode}
      > */}
        {darkMode ? (
          <img src={"./sun.svg"} alt="sun" width={25} height={25} />
        ) : (
          <img src={"./moon.svg"} alt="moon" width={25} height={25} />
        )}{" "}
      </Button>

      <UserButton afterSignOutUrl="/" />

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
    </div>
  );
}

export default NavBar;

const Button = styled.button`
  /* background: none;
  border: none;
  background-color: blue;
  transform: ${(props) => props.theme.darkMode && "rotate(360deg)"};
  transition: all 1s; */
`;
