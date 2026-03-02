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
      if (err.response) {
        setError(`Server Error: ${err.response.status}`);
      } else if (err.request) {
        setError("Server not responding. Please try again.");
      } else {
        setError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition hover:scale-105">
        <h1 className="text-2xl font-bold text-center mb-6">
          Identity Reconciliation
        </h1>

        <IdentifyForm
          onSubmit={handleIdentify}
          loading={loading}
          setError={setError}
        />

        {error && (
          <p className="text-red-500 mt-4 text-center font-medium">
            {error}
          </p>
        )}

        <ResultCard result={result} />
      </div>
    </div>
  );
}

export default App;