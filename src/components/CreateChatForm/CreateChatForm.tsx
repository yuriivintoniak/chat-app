import React, { useState } from "react";
import "./CreateChatForm.css";

const CreateChatForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("New chat created:", { firstName, lastName });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <input
            type="text"
            required
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            required
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Create Chat
        </button>
      </form>
    </div>
  );
};

export default CreateChatForm;
