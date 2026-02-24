
import { createContext, useContext, useState, useEffect, useCallback, useRef, useId } from "react";
import toast from "react-hot-toast";

const PasswordContext = createContext();

export const PasswordProvider = ({ children }) => {
  const [passlength, setPasslength] = useState(() => {
    const saved = localStorage.getItem("passlength");
    return saved ? JSON.parse(saved) : 12;
  });
  const [char, setChar] = useState(() => {
    const saved = localStorage.getItem("char");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [num, setNum] = useState(() => {
    const saved = localStorage.getItem("num");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [currentPass, setCurrentPass] = useState("");
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("passwordHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // PWA Install States
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  const passRef = useRef(null);
  const numerId = useId();
  const characterId = useId();

  const calculateStrength = (len, useNum, useChar) => {
    let score = 0;
    if (len >= 8) score++;
    if (len >= 12) score++;
    if (useNum) score++;
    if (useChar) score++;
    if (score <= 1) return "Weak";
    if (score <= 3) return "Medium";
    return "Strong";
  };

  const strength = calculateStrength(passlength, num, char);

  const generatePassword = useCallback(() => {
    if (!char && !num) {
      setCurrentPass("");
      return;
    }
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) charset += "0123456789";
    if (char) charset += "#$%^!@*()";
    let pass = "";
    for (let i = 0; i < passlength; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    const currentStrength = calculateStrength(passlength, num, char);
    setCurrentPass(pass);
    setHistory((prev) => [{ text: pass, power: currentStrength }, ...prev].slice(0, 10));
  }, [passlength, char, num]);

  // PWA Installation Logic
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
    });
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  useEffect(() => {
    localStorage.setItem("passlength", JSON.stringify(passlength));
    localStorage.setItem("char", JSON.stringify(char));
    localStorage.setItem("num", JSON.stringify(num));
    localStorage.setItem("passwordHistory", JSON.stringify(history));
  }, [passlength, char, num, history]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyPassword = useCallback((text = currentPass) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", { icon: '✅' });
  }, [currentPass]);

  const clearHistory = () => {
    toast((t) => (
      <div className="flex flex-col gap-2">
        <span className="font-medium text-sm text-slate-900">Clear all passwords from history?</span>
        <div className="flex gap-2 justify-end">
          <button onClick={() => toast.dismiss(t.id)} className="px-3 py-1 text-xs font-semibold bg-slate-200 text-slate-700 rounded-md">Cancel</button>
          <button onClick={() => {
            setHistory([]);
            localStorage.removeItem("passwordHistory");
            toast.dismiss(t.id);
            toast.success("History cleared");
          }} className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-md">Clear All</button>
        </div>
      </div>
    ), { duration: 4000, position: "top-center" });
  };

  const deletePassword = (index) => {
    toast((t) => (
      <div className="flex flex-col gap-2">
        <span className="font-medium text-sm text-slate-900">Delete this password?</span>
        <div className="flex gap-2 justify-end">
          <button onClick={() => toast.dismiss(t.id)} className="px-3 py-1 text-xs font-semibold bg-slate-200 text-slate-700 rounded-md">Cancel</button>
          <button onClick={() => {
            setHistory(prev => prev.filter((_, i) => i !== index));
            toast.dismiss(t.id);
            toast.success("Deleted");
          }} className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-md">Delete</button>
        </div>
      </div>
    ), { duration: 4000, position: "top-center" });
  };

  return (
    <PasswordContext.Provider value={{
      passlength, setPasslength, char, setChar, num, setNum,
      currentPass, passRef, generatePassword, copyPassword,
      history, clearHistory, deletePassword, strength,
      isInstallable, installApp
    }}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = () => useContext(PasswordContext);