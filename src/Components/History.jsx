import { usePassword } from "../context/PasswordContext";
import toast from "react-hot-toast";

export default function History() {
  const { history, clearHistory, deletePassword } = usePassword();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      icon: '✅',
    });
  };

  

const handleDelete = (index) => {
    deletePassword(index);
  };
  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-transparent dark:border-slate-800 transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Password History</h2>
        {history.length > 0 && (
          <button
            onClick={() => {
              clearHistory();
            
            }}
            className="text-xs bg-red-500 dark:bg-red-600 text-white px-2 py-1 rounded hover:bg-red-600 dark:hover:bg-red-700 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <ul className="space-y-2">
        {history.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 italic text-center py-4">No history yet</li>
        ) : (
          history.map((item, i) => (
            <li
              key={i}
              className="flex justify-between items-center px-3 py-2 bg-gray-100 dark:bg-slate-800 rounded-md border border-transparent dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all"
            >
              <div className="flex flex-col truncate pr-2">
                <span className="truncate font-mono text-sm text-slate-800 dark:text-slate-200">
                  {item.text}
                </span>
                <span className={`text-[10px] font-bold uppercase ${
                  item.power === 'Strong' ? 'text-green-500' : 
                  item.power === 'Medium' ? 'text-yellow-600 dark:text-amber-500' : 
                  'text-red-500'
                }`}>
                  {item.power}
                </span>
              </div>

              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(item.text)}
                  className="px-2 py-1 text-xs bg-blue-600 dark:bg-blue-700 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  Copy
                </button>
                <button
                  onClick={() => handleDelete(i)}
                  className="px-2 py-1 text-xs bg-red-500 dark:bg-red-800/60 text-white rounded hover:bg-red-600 dark:hover:bg-red-600 transition-colors"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}