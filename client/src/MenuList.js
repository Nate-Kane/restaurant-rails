import Menu from "./Menu"

const MenuList = (props) => {
  return (
    <div>
      <h3>Here are our menus</h3>
        <ul>
          {props.menus.map((m) => (
            <Menu
              updateMenu={props.updateMenu}
              deleteMenu={props.deleteMenu}
              key={m.id}
              {...m}
            />
          ))}
        </ul>
    </div>
  );
};

export default MenuList;