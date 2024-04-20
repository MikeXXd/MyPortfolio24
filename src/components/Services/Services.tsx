import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.png";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-comtainer">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className={`services-format ${index % 2 !== 0 && "self-end"}`}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
