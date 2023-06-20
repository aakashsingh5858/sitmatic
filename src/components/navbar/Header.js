import React, { useState } from "react";
import Logo from "../../assets/SitmaticLogoNew.png";
import "./header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const headerList = [
    "HOME",
    "PRODUCT",
    "ERGONOMICS",
    "RESOURCES",
    "ABOUTS US",
    "CONTACT US",
  ];
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <img src={Logo} />
      </div>
      <div className="headerList">
        {headerList.map((list, ind) => {
          return (
            <li
              className={`headerListItem ${activeTab === ind && "active"}`}
              onClick={() => setActiveTab(ind)}
            >
              {list}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
