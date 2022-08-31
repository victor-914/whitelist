import React, { useState, useEffect } from "react";
import NAVLISTARRAY from "../../utils/NavListArray";
import StyledNavBar from "./NavBar.styles";
import Image from "next/image";
import call from "/assets/call_icon.svg";
import { secondaryColor } from "../../utils/Colors";
import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [navColor, setnavColor] = useState(`${secondaryColor}`);
  const [color, setColor] = useState("#fff");
  const [shadow, setShadow] = useState("");
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const handleClick = (e) => {
    console.log(e.target, "tae");
  };

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("#fff")
      : setnavColor(`${secondaryColor}`);
    window.scrollY > 10 ? setColor("#015998") : setColor("#fff");
    window.scrollY > 10
      ? setShadow("0px 4px 10px rgba(0, 0, 0, 0.25)")
      : setShadow("");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleToggle = () => {
    setSubMenu(!subMenu);
  };

  return (
    <StyledNavBar
      style={{
        backgroundColor: `${navColor}`,
        boxShadow: `${shadow}`,
      }}
    >
      <div className="logo_section"></div>

      <div className="nav_content">
        {NAVLISTARRAY.map((items) => {
          if (items?.submenu) {
            return (
              <div
                className="submenu_container"
                onMouseEnter={() => {
                  setSubMenu(true);
                }}
                onMouseLeave={() => {
                  setSubMenu(false);
                }}
                key={items.title}
              >
                <div
                  onMouseEnter={() => {
                    setSubMenu(true);
                  }}
                  style={{
                    color: `${color}`,
                  }}
                  className="service_title"
                  key={items.title}
                >
                  {items.title}
                </div>
                <div className={`${subMenu ? "SHOW" : "HIDE"}`}>
                  {items.submenu.map((item) => (
                    <Link href={item.path}>
                      <a
                        key={item.subitem}
                        onMouseEnter={() => {
                          setSubMenu(true);
                        }}
                        onMouseLeave={() => {
                          setSubMenu(false);
                        }}
                      
                      >
                        <li key={item.subitem} id="submenu_list">
                          {item.subitem}
                        </li>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div>
              <div key={items.item}>
                <Link href={items.path}>
                  <a
                    key={items.item}
                    className={items.className}
                    style={{
                      color: `${color}`,
                    }}
                  >
                    <li key={items.item}>{items.title}</li>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="call_section">
        <div className="call_icon">
          <Image src={call} width="30px" />
        </div>
        <div className="call_number">082-452-1345</div>
      </div>
      <div
        style={{
          color: `${color}`,
        }}
        className="hamburger"
        onClick={handleMenu}
      >
        <AiOutlineMenu />
      </div>

      {menu && (
        <div className="mobileMenuCover">
          <div className="icon_holder">
            <BsXLg id="cancel" onClick={handleMenu} />
          </div>
          <div className="menu">
            {NAVLISTARRAY.map((item) => {
              if (item?.submenu) {
                return (
                  <div   key={item.title}>
                    <li
                      key={item.title}
                      className="service_menu"
                      onClick={handleToggle}
                    >
                      {item.title}
                    </li>
                    <div className="submenu">
                      {item?.submenu.map((item) => (
                        <>
                          {subMenu && (
                            <Link href={item.path}>
                              <a
                                id="submenu_li"
                                onClick={handleMenu}
                                key={item.subitem}
                              >
                                <li key={item.subitem}>{item.subitem}</li>
                              </a>
                            </Link>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link href={item.path}>
                  <a
                    key={item.item}
                    className={item.className}
                    onClick={handleClick}
                  >
                    <li key={item.item}>{item.title}</li>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </StyledNavBar>
  );
}

export default NavBar;
