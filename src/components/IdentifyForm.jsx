import { useState } from "react";

const IdentifyForm = ({ onSubmit, loading }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !phoneNumber) {
      return;
    }

    onSubmit({
      email: email || null,
      phoneNumber: phoneNumber || null,
    });
  };

  const handleClear = () => {
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white p-3 rounded-lg"
      >
        {loading ? "Processing..." : "Identify"}
      </button>

      <button
        type="button"
        onClick={handleClear}
        className="w-full bg-gray-300 text-black p-3 rounded-lg"
      >
        Clear
      </button>
    </form>
  );
};

export default IdentifyForm;