import Menu from "./Menu";
const SubMenu = ({ submenus }) => {
  return (
    <ul className="subMenuContainer">
      {submenus?.map((list, i) => {
        return (
          <div className="subMenuItemBlock" key={i}>
            <li className="subMenuItem">{list.title}</li>
          </div>
        );
      })}
    </ul>
  );
};

export default SubMenu;
