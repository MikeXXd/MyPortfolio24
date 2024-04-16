import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.png";
import mail_icon from "../../assets/icons8-email-50.png";
import location_icon from "../../assets/icons8-location-50.png";
import call_icon from "../../assets/icons8-call-50.png";
import { FormEvent } from "react";

const Contact = () => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "62f2e004-9ade-4a96-8e85-b852b2cce203");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let´s talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything you want me to work on.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>mike3d@seznam.cz</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+420 604413503</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Czech Republic</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="text" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
