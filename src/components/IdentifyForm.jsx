import { useState } from "react";

function IdentifyForm({ onSubmit, loading, setError }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    if (!email && !phoneNumber) {
      setError("Please provide at least email or phone number.");
      return;
    }

    onSubmit({ email, phoneNumber });
  };

  const handleClear = () => {
    setEmail("");
    setPhoneNumber("");
    setError("");
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button
        disabled={loading}
        onClick={handleSubmit}
        className={`w-full p-3 rounded-lg text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : "Identify"}
      </button>

      <button
        onClick={handleClear}
        className="w-full mt-3 bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition"
      >
        Clear
      </button>
    </>
  );
}

export default IdentifyForm;