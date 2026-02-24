import { usePassword } from "../context/PasswordContext";
import toast from "react-hot-toast";

export default function PassGen() {
  const {
    currentPass,
    copyPassword,
    passlength,
    setPasslength,
    char,
    setChar,
    num,
    setNum,
    strength,
    history,
    
  } = usePassword();

  const getColor = (s) => {
    if (s === "Weak") return "bg-red-500";
    if (s === "Medium") return "bg-yellow-500 dark:bg-amber-500";
    return "bg-green-500 dark:bg-emerald-500";
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", { icon: '✅' });
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-transparent dark:border-slate-800 transition-colors duration-300">
      
   

      <h1 className="text-2xl font-bold text-center mb-4 text-slate-900 dark:text-white">
        🔑 Password Generator
      </h1>

      <div className="mb-4">
        <label className="block font-medium mb-1 text-slate-700 dark:text-slate-300">
          Password Length: {passlength}
        </label>
        <input
          type="range"
          min={4} max={32}
          value={passlength}
          onChange={(e) => setPasslength(Number(e.target.value))}
          className="w-full accent-blue-600 dark:accent-blue-500 cursor-pointer"
        />
      </div>

      <div className="flex gap-4 mb-4 text-slate-700 dark:text-slate-300">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={char} onChange={() => setChar(!char)} className="h-4 w-4 text-blue-600 rounded dark:bg-slate-800 dark:border-slate-700"/>
          Include Special
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={num} onChange={() => setNum(!num)} className="h-4 w-4 text-blue-600 rounded dark:bg-slate-800 dark:border-slate-700"/>
          Include Numbers
        </label>
      </div>

      <div className="flex items-center justify-between mb-4 p-3 bg-amber-100 dark:bg-slate-800 rounded-md border border-amber-200 dark:border-slate-700">
        <p className="font-mono truncate text-slate-900 dark:text-blue-400 font-bold">{currentPass}</p>
        <button onClick={() => copyPassword()} className="ml-2 px-3 py-1 bg-green-600 dark:bg-emerald-600 text-white rounded hover:bg-green-700 transition-all active:scale-95">
          Copy
        </button>
      </div>

      <span className={`text-white px-3 py-1 rounded text-sm font-bold shadow-sm ${getColor(strength)}`}>
        Strength: {strength}
      </span>

      <div className="mt-6">
        <h2 className="font-semibold mb-2 text-slate-900 dark:text-slate-200">Recent Passwords</h2>
        <ul className="space-y-2">
          {history.length === 0 ? (
            <li className="text-gray-500 italic">No history yet</li>
          ) : (
            history.slice(0, 5).map((item, i) => (
              <li key={i} className="flex justify-between items-center px-3 py-2 bg-gray-100 dark:bg-slate-800/50 rounded-md border border-transparent dark:border-slate-800">
                <div className="flex flex-col truncate">
                  <span className="truncate font-mono text-sm text-slate-700 dark:text-slate-300">
                    {item.text}
                  </span>
                  <span className={`text-[10px] font-bold uppercase ${item.power === 'Strong' ? 'text-green-500' : item.power === 'Medium' ? 'text-yellow-600' : 'text-red-500'}`}>
                    {item.power}
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(item.text)}
                  className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition-all"
                >
                  Copy
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}