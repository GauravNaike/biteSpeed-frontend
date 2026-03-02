import { useState } from "react";
import { identifyContact } from "./api/api";
import IdentifyForm from "./components/IdentifyForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleIdentify = async (data) => {
    try {
      setLoading(true);
      setError("");
      const response = await identifyContact(data);
      setResult(response.data.contact);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Identity Reconciliation
        </h1>

        <IdentifyForm onSubmit={handleIdentify} loading={loading} />

        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}

        <ResultCard result={result} />
      </div>
    </div>
  );
}

export default App;