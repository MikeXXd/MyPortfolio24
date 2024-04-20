import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.png";
import mywork_data from "../../assets/mywork_data";
import git_icon from "../../assets/git_icon_50.png";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt=""
            onClick={() => window.open(work.w_link, work.w_name)}
          />
        ))}
      </div>
      <a href="https://github.com/MikeXXd" className="mywork-git">
        <p>My Code</p>
        <img src={git_icon} alt="" />
      </a>
    </div>
  );
};

export default MyWork;
