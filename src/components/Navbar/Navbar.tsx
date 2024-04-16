import "./Navbar.css";
import logo from "../../assets/logo_mikexd.png";
import { useRef, useState } from "react";
import underline from "../../assets/theme_pattern.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/icons8-menu-50.png";
import menu_close from "../../assets/icons8-close-50.png";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (menuRef.current !== null) {
      menuRef.current.style.right = "0";
    }
    return;
  };
  const closeMenu = () => {
    if (menuRef.current !== null) {
      menuRef.current.style.right = "-350px";
    }
    return;
  };

  return (
    <div id="home" className="navbar">
      <img src={logo} alt="logo" width={100} />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="open menu icon"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu icon"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} width={50} /> : <></>}{" "}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} width={50} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} width={50} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} width={50} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} width={50} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
