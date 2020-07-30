import React from "react";

// todo - update this to my mothers contact info

const Contact = () => {
  return (
    <div className="homePage">
      <section className="homeSection6"></section>
      <section className="homeSection2">
        <div className="traditionalContact">
          <h3>Contact Information</h3>

          <br></br>
          <p>Phone: (707) - 799 - 1271</p>
          <br></br>
          <p>Email: Gdukes707@gmail.com</p>
        </div>
        <br></br>
        <div className="socialLinks">
          <span className="socialLinksSpan">
            <a href="https://github.com/Geddydukes" target="blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/Geddysburgadr" target="blank">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/gdukes707" target="blank">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/geddydukes/" target="blank">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/geddy-dukes/" target="blank">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://git.generalassemb.ly/gdukes707" target="blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </section>
      <section className="homeSection7"></section>
    </div>
  );
};

export default Contact;
