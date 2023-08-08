import React, { useState } from "react";
import Button from "./Button";

interface WorkEmailInputProps {
  onSubmit: (email: string) => void;
}

const WorkEmailInput: React.FC<WorkEmailInputProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('Email received: ',email);
    e.preventDefault();
    // Call the parent component's onSubmit function with the entered email
    onSubmit(email);
    // Reset the email state after form submission
    setEmail("");
  };

  return (
    <form className="mt-5 px-10 lg:px-0" onSubmit={handleSubmit}>
      <div className="grid grid-cols-12 gap-3">
        <input
          type="email"
          placeholder="Enter your work email"
          value={email}
          onChange={handleChange}
          className="py-2 px-3 sm:px-4 bg-white text-gray-800 rounded-lg border focus:outline-blue-600 focus:ring-2 focus:ring-blue-600 focus:border-transparent col-span-8 sm:col-span-7 md:col-span-3"
        />
        <Button
          
          type="submit" // Use 'type' prop here
          bgColor="primary"
          rounded="rounded-full"
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none col-span-4 sm:col-span-5 md:col-span-2"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default WorkEmailInput;
