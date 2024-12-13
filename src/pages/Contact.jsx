import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const rexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rexpression.test(email)) {
      setError("Please enter a valid email address.");
      setNotification("");
    } else {
      setError("");
      setNotification("Message sent!");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>With this rarely used method...</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Email: {error && <p className="error">{error}</p>}</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email input field"
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message input field"
          />
        </div>
        {notification && <p className="notification">{notification}</p>}
        <button type="submit" aria-label="Subimit button">
          Send
        </button>
      </form>
      <h2>Or...You can</h2>
      <p>Send me a LinkedIn message directly</p>
      <div className="linkedin-wrapper">
        <a
          href="https://www.linkedin.com/in/miaochuan-h-9a260518a/"
          className="linkedin-icon"
          aria-label="LinkedIn message link icon"
          target="_blank"
        >
          <img src="\logo\linkedin.webp" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
