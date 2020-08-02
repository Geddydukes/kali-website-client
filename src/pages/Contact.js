import React from "react";
import ContactForm from "../components/ContactForm";

// todo - update this to my mothers contact info

const Contact = () => {
  return (
    <div className="contact">
      <section className="homeSection6"></section>
      <section className="homeSection2">
        <h3>Please Fill Out to Contact Me</h3>
        <br></br>
        <ContactForm />
        <br></br>
      </section>
    </div>
  );
};

export default Contact;
