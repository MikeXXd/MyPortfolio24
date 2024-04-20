import "./Footer.css";
import logo from "../../assets/logo_mikexd.png";
import git_icon from "../../assets/git_icon_50.png";
import linkedIn_icon from "../../assets/linkedin_icon_50.svg";
import CV from "../../assets/Michal_Viliš_CV_03_2024_en.pdf";
import CV_icon from "../../assets/cv_icon_50.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src={logo}
            alt=""
            width={100}
            height={100}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          />
          <p>
            I am a co-creator of this universe with billions of years of
            experience.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 MikeXd. All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <img
            src={git_icon}
            alt=""
            onClick={() => window.open("https://github.com/MikeXXd")}
          />
          <img
            src={linkedIn_icon}
            alt=""
            title="LinkedIn profile"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/michal-vili%C5%A1-483196251/",
              )
            }
          />
          <img
            src={CV_icon}
            alt=""
            onClick={() => window.open(CV)}
            title="Curriculum vitae"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
