"use client";

import { useState, useEffect } from "react";

import React from "react";

const ScrollToTop = () => {
  const [isVisibleScrollButton, setIsVisibleScrollButton] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisibleScrollButton(true);
    } else {
      setIsVisibleScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`scrollToTopButton ${isVisibleScrollButton ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      &#9650;
    </div>
  );
};

export default ScrollToTop;
