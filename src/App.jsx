import { useState } from "react";
import { identifyContact } from "./api/api";

function App() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await identifyContact({ email, phoneNumber });
      setResult(response.data.contact);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Identity Reconciliation
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full p-3 mb-4 border rounded-lg"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "Identify"}
        </button>

        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}

        {result && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <p><strong>Primary Contact ID:</strong> {result.primaryContactId}</p>
            <p><strong>Emails:</strong></p>
            <ul className="list-disc ml-6">
              {result.emails.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>

            <p><strong>Phone Numbers:</strong></p>
            <ul className="list-disc ml-6">
              {result.phoneNumbers.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>

            <p><strong>Secondary Contact IDs:</strong></p>
            <ul className="list-disc ml-6">
              {result.secondaryContactIds.map((id, i) => (
                <li key={i}>{id}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;