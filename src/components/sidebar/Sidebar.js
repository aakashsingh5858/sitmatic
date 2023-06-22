import React, { useEffect, useState } from "react";
import "./sidebar.css";
import ChevronLeftIcon from "../../assets/image/chevron-left (1).png";
import { menuItems } from "../../Data";

const Sidebar = ({ isOpen, setIsOpen, getValue }) => {
  const [subMenuValue, setSubMenuValue] = useState();
  useEffect(() => {
    setSubMenuValue(getValue);
  }, [isOpen]);
  const getSubMenu = (data) => {
    let arr = [];
    data.map((list, i) => {
      arr.push(list);
    });
    setSubMenuValue(arr);
  };
  return (
    <div className="sidebarWrapper" style={{ width: isOpen ? "25rem" : "0" }}>
      <div
        className="sidebarBackBtn"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="sidebarBackBtnIcon">
          <img src={ChevronLeftIcon} width={25} />
        </div>
        <div className="sidebarBack">
          <h4 className="sidebarBackh4">Back</h4>
        </div>
      </div>
      <div style={{ widh: "100%" }}>
        {subMenuValue?.map((list, i) => {
          console.log(list.title, "......");
          return (
            <div className="sideListContentBlock" key={i}>
              <li
                className="sideListContent"
                style={{ width: list.submenu ? "90%" : "100%" }}
              >
                {list.title}
              </li>
              {list.submenu ? (
                <div className="sidebarBtnIcon">
                  <img
                    src={ChevronLeftIcon}
                    width={25}
                    style={{ transform: "rotate(180deg)" }}
                    onClick={() => {
                      setIsOpen(true);
                      getSubMenu(list.submenu);
                    }}
                  />
                </div>
              ) : (
                <span />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
