import React from "react";
const Menu = ({ items }) => {
  return (
    <div>
      <ul className="menu rounded-box space-y-4">
        {items.map((item) => (
          // TODO:更为好看的导航栏
          <li>
            <a className="text-center text-base">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
