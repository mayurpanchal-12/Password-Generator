import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PasswordProvider } from "./context/PasswordContext";
import Navbar from "./Components/Navbar";
import PassGen from "./Components/PasswordGenerator";
import History from "./Components/History";
import Guide from "./Components/guide";
import {Toaster} from "react-hot-toast";
export default function App() {
  return (
    <PasswordProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Toaster position="top-center" reverseOrder={false}
           toastOptions={{
              className: "dark:bg-slate-800 dark:text-white dark:border dark:border-slate-700 shadow-xl",
            }} />
        <Navbar />
        <main className="p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<PassGen />} />
          <Route path="/history" element={<History />} />
          <Route path="/guide" element={<Guide/>} />
        </Routes>
        </main>
        </div>
      </Router>
    </PasswordProvider>
  );
}
