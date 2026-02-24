
import React, { useState, useEffect } from "react";

export default function Theme() {
  let [istheme, settheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement; 
    if (istheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [istheme]);

  let toggleTheme = () => {
    settheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button 
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-800 dark:text-white transition-colors"
    >
      {istheme === "light" ? "🌙 " : "☀️ "}
    </button>
  );
}