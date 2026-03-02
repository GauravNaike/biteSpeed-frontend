import { useState } from "react";
import { identifyContact } from "./api/api";
import IdentifyForm from "./components/IdentifyForm";
import ResultCard from "./components/ResultCard";
import { toast } from "react-toastify";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(null);

  const handleIdentify = async (data) => {
    try {
      setLoading(true);
      setResult(null);
      setResponseTime(null);

      const start = Date.now();

      const response = await identifyContact(data);

      const end = Date.now();
      setResponseTime(end - start);

      setResult(response.data.contact);

      toast.success("Contact identified successfully!");
    } catch (err) {
      if (err.code === "ECONNABORTED") {
        toast.error(
          "Server is waking up (free hosting). Please wait up to 60 seconds and try again."
        );
      } else if (err.response) {
        toast.error(`Server Error: ${err.response.status}`);
      } else if (err.request) {
        toast.error("Server not responding. Please try again.");
      } else {
        toast.error("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition hover:scale-105">
        <h1 className="text-2xl font-bold text-center mb-6">
          Identity Reconciliation
        </h1>

        <IdentifyForm
          onSubmit={handleIdentify}
          loading={loading}
        />

        <ResultCard result={result} />

        {responseTime && (
          <p className="text-sm text-gray-500 mt-4 text-center">
            Response time: {responseTime} ms
          </p>
        )}
      </div>

      <p className="text-white mt-6 text-sm opacity-80 text-center">
        Built by Gaurav Naike • React + Spring Boot + PostgreSQL
      </p>
    </div>
  );
}

export default App;