
export default function Guide() {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-transparent dark:border-slate-800 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">
        Password Security Guide
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
          Why Strong Passwords Matter
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Weak passwords can be easily guessed or cracked, leading to account
          hacking, data theft, and identity fraud.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
          Characteristics of a Strong Password
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>At least 12–16 characters long</li>
          <li>Uppercase and lowercase letters</li>
          <li>Numbers (0–9)</li>
          <li>Special characters (@, #, $, %, !)</li>
          <li>Unique for each account</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Examples</h2>
        <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            <strong className="text-green-600 dark:text-green-400">Strong:</strong> G7@xP!9L#Qm2
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong className="text-red-600 dark:text-red-400">Weak:</strong> password123, admin@123
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">
          How Passwords Get Cracked
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Brute Force Attacks</li>
          <li>Dictionary Attacks</li>
          <li>Phishing</li>
          <li>Keylogging</li>
          <li>Data Breaches</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li>Use different passwords for each account</li>
          <li>Enable Two-Factor Authentication (2FA)</li>
          <li>Avoid sharing passwords</li>
          <li>Use a password manager</li>
        </ul>
      </section>
    </div>
  );
}