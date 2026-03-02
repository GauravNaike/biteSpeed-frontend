function ResultCard({ result }) {
  if (!result) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No data yet. Please identify a contact.
      </p>
    );
  }

  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
      <p>
        <strong>Primary Contact ID:</strong> {result.primaryContactId}
      </p>

      <p className="mt-3 font-semibold">Emails:</p>
      <ul className="list-disc ml-6">
        {result.emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>

      <p className="mt-3 font-semibold">Phone Numbers:</p>
      <ul className="list-disc ml-6">
        {result.phoneNumbers.map((phone, index) => (
          <li key={index}>{phone}</li>
        ))}
      </ul>

      <p className="mt-3 font-semibold">Secondary Contact IDs:</p>
      <ul className="list-disc ml-6">
        {result.secondaryContactIds.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;