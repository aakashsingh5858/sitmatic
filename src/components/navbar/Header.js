import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/SitmaticLogoNew.png";
import "./header.css";
import { menuItems } from "../../Data";
import Menu from "./sub-menu/Menu";

const Header = () => {
  const [dropdown, setDropdown] = useState([]);
  const onMouseEnter = (id) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[id] = true;
      return arr;
    });
  };

  const onMouseLeave = (id) => {
    setDropdown((prev) => {
      let arr = [...prev];
      arr[id] = false;
      return arr;
    });
  };
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <img src={Logo} />
      </div>
      <ul className="headerList">
        {menuItems.map((menu, i) => {
          return (
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => onMouseEnter(i)}
                onMouseLeave={() => onMouseLeave(i)}
              key={i}
            >
              <li className="headerListItem">{menu.title}</li>
              {dropdown[i] && <Menu items={menu.submenu} />}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
