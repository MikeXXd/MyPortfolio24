import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Profile image" width={300} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an exploring programmer with a passion to create the art of
              frontend development and crystalize it into excellence.
            </p>
            <p>
              My passion for frontend development is not only a hobby but also a
              career path that I am dedicated to pursuing.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>TypeScript</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
