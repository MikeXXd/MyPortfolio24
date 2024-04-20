import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../../assets/Michal_Viliš_CV_03_2024_en.pdf";

const Hero = () => {
  const openPdf = () => {
    window.open(CV, "_blank");
    console.log("CV opened");
  };

  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I´m Michal Viliš</span>, frontend developer based in The Czech
        Republic
      </h1>
      <p>
        I´m frontend developer from Silesia, Czech Republic with over 1 year of
        experience working as self-employed programmer{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={openPdf}>
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
