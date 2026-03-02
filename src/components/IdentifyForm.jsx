import { useState } from "react";
import toast from "react-hot-toast";

function IdentifyForm({ onSubmit, loading }) {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    if (!email && !phoneNumber) {
      toast.error("Please provide at least email or phone number.");
      return;
    }

    onSubmit({ email, phoneNumber });
  };

  const handleClear = () => {
    setEmail("");
    setPhoneNumber("");
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
        className={`w-full p-3 rounded-lg text-white transition flex items-center justify-center ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Processing...
          </div>
        ) : (
          "Identify"
        )}
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