import { useState, useEffect, useRef } from "react";
import "./menu.css";
import SubMenu from "./SubMenu";

const Menu = ({ items }) => {
  return (
    <ul className="subMenuContainer ">
      {items?.map((list, i) => {
        return (
          <div className="subMenuItemBlock" key={i}>
            <li className="subMenuItem">{list.title}</li>
            {list.SubMenu ? <span /> : <div className="subMenudash"></div>}

            <span className="subMenuIndicator"></span>
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;
