import "./Navbar.css";
import logo from "../../assets/logo_mikexd.png";
import { useEffect, useRef, useState } from "react";
import underline from "../../assets/theme_pattern.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_icon_50.png";
import menu_close from "../../assets/close_icon_50.png";

const NavBar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    closeMenu();
  }, [menu]);

  useEffect(() => {
    if (menu !== "home") {
      window.addEventListener("scroll", () => {
        if (window.scrollY <= 50) {
          setMenu("home");
        }
      });
    }
  }, [menu]);

  function openMenu() {
    if (menuRef.current !== null) {
      menuRef.current.style.right = "0";
    }
    return;
  }

  function closeMenu() {
    if (menuRef.current !== null) {
      menuRef.current.style.right = "-350px";
    }
    return;
  }

  return (
    <div id="home" className="navbar">
      <AnchorLink href="#contact">
        <img
          src={logo}
          alt=""
          className="action-img"
          width={100}
          onClick={() => setMenu("contact")}
          title="Down to contact section"
        />
      </AnchorLink>
      <img
        src={menu_open}
        onClick={openMenu}
        alt="open menu icon"
        className="nav-mob-open action-img"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu icon"
          className="nav-mob-close action-img"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <img src={underline} width={50} className="underline-pattern" />
          ) : (
            <></>
          )}{" "}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <img src={underline} width={50} className="underline-pattern" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={underline} width={50} className="underline-pattern" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? (
            <img src={underline} width={50} className="underline-pattern" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={underline} width={50} className="underline-pattern" />
          ) : (
            <></>
          )}
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
