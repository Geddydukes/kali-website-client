import React, { useState } from "react";
// import Axios from "axios";
import { sendEmail } from "../models/Email";

// const API_URI = "http://localhost:4100/api/v1/email";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    sent: false,
    buttonText: "Send Message",
  });

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
    console.log(contactData);
  };

  const resetForm = () => {
    setContactData({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setContactData({
      buttonText: "...sending",
    });
    let data = contactData;
    console.log(data);
    sendEmail(data).then((res) => {
      console.log(res);
      setContactData({ sent: true });
      console.log("Success");
      resetForm();
    });
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="message-name" htmlFor="message-name">
            Your Name
          </label>
          <input
            onChange={handleChange}
            name="name"
            className="message-name"
            type="text"
            placeholder="Your Name"
            value={contactData.name}
          />
        </div>
        <div>
          <label className="message-email" htmlFor="message-email">
            Your Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            className="message-email"
            type="email"
            placeholder="your@email.com"
            required
            value={contactData.email}
          />
        </div>
        <div>
          <label className="message-subject" htmlFor="message-subject">
            Subject
          </label>
          <input
            onChange={handleChange}
            name="subject"
            className="message-subject"
            type="text"
            placeholder="Subject"
            value={contactData.subject}
          />
        </div>
        <div>
          <label className="message" htmlFor="message-input">
            Your Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            className="message-input"
            type="text"
            placeholder="Please write your message here"
            value={contactData.message}
            required
          />
        </div>
        <div className="button--container">
          <button type="submit" className="button button-primary">
            {contactData.buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
