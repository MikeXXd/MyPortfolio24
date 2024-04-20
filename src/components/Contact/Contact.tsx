import { FormEvent, useState } from "react";
import call_icon from "../../assets/call_icon_50.png";
import linkedIn_icon from "../../assets/linkedin_icon_50.svg";
import location_icon from "../../assets/location_icon_50.png";
import theme_pattern from "../../assets/theme_pattern.png";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "62f2e004-9ade-4a96-8e85-b852b2cce203");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult("Error, please use another mean of comunication");
      setTimeout(() => {
        setResult("");
      }, 5000);
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
              <div className="contact-detail-link">
                <a href="https://www.linkedin.com/in/michal-vili%C5%A1-483196251/">
                  <img src={linkedIn_icon} alt="" />
                  <p>LinkedIn profile</p>
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+420 604413503</p>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-link">
                <a href="https://www.google.com/maps/place/Fr%C3%BDdlant+nad+Ostravic%C3%AD,+739+11+Fr%C3%BDdlant+nad+Ostravic%C3%AD/@50.1924311,14.4540147,6z/data=!4m15!1m8!3m7!1s0x4713f58304b87695:0x400af0f66150460!2sFr%C3%BDdlant+nad+Ostravic%C3%AD,+739+11+Fr%C3%BDdlant+nad+Ostravic%C3%AD!3b1!8m2!3d49.5918023!4d18.3585049!16zL20vMDluMHc5!3m5!1s0x4713f58304b87695:0x400af0f66150460!8m2!3d49.5918023!4d18.3585049!16zL20vMDluMHc5?authuser=0&entry=ttu">
                  <img src={location_icon} alt="" />
                  <p>Beskydy, Czech Republic</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            minLength={3}
            name="name"
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            rows={7}
            placeholder="Enter your message"
            required
            minLength={20}
          ></textarea>
          <button type="submit" className="contact-submit">
            {result ? result : "Submit now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
