import { useNavigate } from "react-router-dom";

export default function Wildcard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center">
      <div className="max-w-md w-full px-6 py-10 rounded-2xl shadow-xl border backdrop-blur-lg 
        bg-white/80 border-gray-200 text-gray-800
        dark:bg-white/5 dark:border-white/10 dark:text-white transition-colors duration-300">

        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
          404
        </h1>

        <h2 className="text-xl font-semibold mb-2">
          Page Not Found
        </h2>

        <p className="text-sm opacity-70 mb-6">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg font-medium transition-all duration-300 
              bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg 
              hover:scale-105 hover:shadow-xl"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg font-medium transition-all duration-300 
              bg-gray-200 text-gray-700 hover:bg-gray-300 
              dark:bg-white/10 dark:text-white dark:hover:bg-white/20 hover:scale-105"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}