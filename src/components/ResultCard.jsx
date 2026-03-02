function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-6 bg-gray-100 p-4 rounded-lg">
      <p><strong>Primary Contact ID:</strong> {result.primaryContactId}</p>

      <p className="mt-2"><strong>Emails:</strong></p>
      <ul className="list-disc ml-6">
        {result.emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>

      <p className="mt-2"><strong>Phone Numbers:</strong></p>
      <ul className="list-disc ml-6">
        {result.phoneNumbers.map((phone, index) => (
          <li key={index}>{phone}</li>
        ))}
      </ul>

      <p className="mt-2"><strong>Secondary Contact IDs:</strong></p>
      <ul className="list-disc ml-6">
        {result.secondaryContactIds.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;