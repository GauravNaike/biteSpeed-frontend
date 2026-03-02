import { useState } from "react";
import { identifyContact } from "../api/api";
import { toast } from "react-toastify";

const IdentifyForm = ({ setResult }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !phoneNumber) {
      toast.warning("Please enter at least Email or Phone Number.");
      return;
    }

    try {
      setLoading(true);

      const response = await identifyContact({
        email: email || null,
        phoneNumber: phoneNumber || null,
      });

      setResult(response.data.contact);
      toast.success("Contact identified successfully!");
    } catch (error) {
      console.error("Error:", error);

      if (error.code === "ECONNABORTED") {
        toast.error(
          "Server is waking up (free hosting). Please wait up to 60 seconds and try again."
        );
      } else if (error.response) {
        toast.error("Server error. Please try again.");
      } else {
        toast.error("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEmail("");
    setPhoneNumber("");
    setResult(null);
    toast.info("Form cleared.");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Identity Reconciliation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Identify"}
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="w-full bg-gray-300 text-black p-3 rounded-lg hover:bg-gray-400 transition"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default IdentifyForm;