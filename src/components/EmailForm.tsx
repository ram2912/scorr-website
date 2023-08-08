import React, { useState } from "react";
import Button from "./Button";

interface WorkEmailInputProps {
  onSubmit: (email: string) => void;
}

const WorkEmailInput: React.FC<WorkEmailInputProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the email against the pattern
    if (!isWorkEmail(email)) {
      setError(true);
      return;
    }

    // Call the parent component's onSubmit function with the entered email
    onSubmit(email);
    // Reset the email state after form submission
    setEmail("");
  };

  const isWorkEmail = (email: string) => {
    const personalEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      // Add more personal email domains if needed
    ];

    const domain = email.split("@")[1];
    return !personalEmailDomains.includes(domain.toLowerCase());
  };

  return (
    <form className="mt-5 px-5 lg:px-0" onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-3">
        <input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={handleChange}
          className={`py-2 px-3 sm:px-4 bg-white text-gray-800 rounded-lg ${
            error ? "border-2 border-red-500" : "border-2 border-blue-600"
          } focus:ring-2 focus:ring-blue-600 focus:border-blue-600 col-span-8 sm:col-span-7 md:col-span-3`}
        />
        <Button
          type="submit" 
          bgColor="primary"
          rounded="rounded-full"
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none col-span-4 sm:col-span-5 md:col-span-2"
        >
          Submit
        </Button>
      </div>
      {error && <p style={{ color: '#e53e3e' }} className="mt-2 font-bold">Please enter a valid work email.</p>
}
    </form>
  );
};

export default WorkEmailInput;
