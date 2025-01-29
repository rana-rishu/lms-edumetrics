import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/contact", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      {status && <div className="mb-4 text-red-500">{status}</div>}
      <div className="mb-4">
        <label htmlFor="name" className="block font-semibold mb-2">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-2">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-semibold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded w-full p-2"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
