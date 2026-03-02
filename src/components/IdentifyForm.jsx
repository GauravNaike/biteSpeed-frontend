import { useState } from "react";
import { identifyContact } from "../api/api";
import { toast } from "react-toastify";

const IdentifyForm = ({ setResult }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email && !phoneNumber) {
      toast.warning("Please enter at least Email or Phone Number");
      return;
    }

    setLoading(true);

    try {
      const response = await identifyContact({
        email: email || null,
        phoneNumber: phoneNumber || null,
      });

      setResult(response.data);

      toast.success("Contact identified successfully!");
    } catch (error) {
      console.error("Error:", error);

      if (!error.response) {
        toast.error(
          "Server is waking up (free hosting). Please wait up to 60 seconds and try again."
        );
      } else if (error.response.status >= 500) {
        toast.error("Server error occurred. Please try again later.");
      } else if (error.response.status >= 400) {
        toast.error("Invalid request. Please check your input.");
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
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
        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
      >
        {loading ? "Processing..." : "Identify"}
      </button>
    </form>
  );
};

export default IdentifyForm;