import React, { useState } from "react";
import axios from "axios";
import "./CreateChatForm.css";

function CreateChatForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        first_name: firstName,
        last_name: lastName,
      });

      if (response.data.message) {
        setFirstName("");
        setLastName("");
        console.log(response.data.message);
      }
    } catch (error: any) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "Error creating chat");
    }
  };

  return (
    <div className="form-container">
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <input
            type="text"
            id="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Create Chat</button>
      </form>
    </div>
  );
};

export default CreateChatForm;
