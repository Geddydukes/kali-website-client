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
  };

  const resetForm = () => {
    setContactData({
      name: "",
      message: "",
      email: "",
      subject: "",
      buttonText: "Success! Message Sent",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setContactData({
      buttonText: "...Sending",
    });
    let data = contactData;
    sendEmail(data)
      .then((res) => {
        setContactData({ sent: true });
        resetForm();
        console.log("Success");
      })
      .catch((err) => {
        console.log(`Error on contactform`, err);
      });
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label className="message-name" htmlFor="message-name">
            Your Name
          </label>
          <br></br>
          <input
            onChange={handleChange}
            name="name"
            className="message-name"
            type="text"
            placeholder="Your Name"
            value={contactData.name}
            required
          />
        </div>
        <div>
          <label className="message-email" htmlFor="message-email">
            Your Email
          </label>
          <br></br>
          <input
            onChange={handleChange}
            name="email"
            className="message-email"
            type="email"
            placeholder="Your@email.com"
            required
            value={contactData.email}
          />
        </div>
        <div>
          <label className="message-subject" htmlFor="message-subject">
            Subject
          </label>
          <br></br>
          <input
            onChange={handleChange}
            name="subject"
            className="message-subject"
            type="text"
            placeholder="Subject"
            value={contactData.subject}
            required
            number="40"
          />
        </div>
        <div>
          <label className="message" htmlFor="message-input">
            Your Message
          </label>
          <br></br>
          <textarea
            onChange={handleChange}
            name="message"
            className="message-input"
            type="text"
            placeholder="Please write your message here"
            value={contactData.message}
            required
            cols="40"
            rows="10"
          />
        </div>
        <br></br>
        <br></br>
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
