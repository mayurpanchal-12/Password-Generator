import { NavLink } from "react-router-dom";
import Theme from "./theme";
import { usePassword } from "../context/PasswordContext";

export default function Navbar() {
  const { isInstallable, installApp } = usePassword();

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 px-2 py-2 font-bold dark:text-blue-400 flex items-center"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 px-2 py-2 flex items-center transition-colors";

  return (
    <nav className="flex items-center bg-white dark:bg-slate-900 px-4 py-3 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="flex gap-2 sm:gap-4 items-center">
        <NavLink to="/" className={linkClass}>Generator</NavLink>
        <NavLink to="/history" className={linkClass}>History</NavLink>
        <NavLink to="/guide" className={linkClass}>Guide</NavLink>
      </div>

      <div className="ml-auto flex items-center gap-3">
        {isInstallable && (
          <button
            onClick={installApp}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-full shadow-lg transition-all active:scale-90 animate-pulse"
          >
            <span>📲</span>
            <span className="uppercase tracking-tighter">Install</span>
          </button>
        )}
        
        {isInstallable && (
          <button
            onClick={installApp}
            className="sm:hidden flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full shadow-md active:scale-90"
            aria-label="Install App"
          >
            📲
          </button>
        )}

        <div className="border-l border-gray-200 dark:border-slate-700 pl-3 h-6 flex items-center">
          <Theme />
        </div>
      </div>
    </nav>
  );
}