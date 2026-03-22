import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PasswordProvider } from "./context/PasswordContext";
import Navbar from "./Components/Navbar";
import PassGen from "./Components/PasswordGenerator";
import History from "./Components/History";
import Guide from "./Components/guide";
import {Toaster} from "react-hot-toast";
import ErrorBoundary from "./Components/ErrorBoundary";
import Wildcard from "./Components/wildcard";
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
          <Route path="/" element={
             <ErrorBoundary>
              <PassGen />
             </ErrorBoundary>
            } />
          <Route path="/history" element={
             <ErrorBoundary>
              <History />
              </ErrorBoundary>
                  } />

          <Route path="/guide" element={
             <ErrorBoundary>
              <Guide/>
              </ErrorBoundary>
            } />
            <Route path="*" element={<Wildcard/>}/>
        </Routes>
        </main>
        </div>
      </Router>
    </PasswordProvider>
  );
}
