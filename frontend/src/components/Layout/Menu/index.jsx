import React, { useState } from "react";

const Menu = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <ul className="menu sm:menu-sm md:menu-md lg:menu-lg rounded-box overflow-hidden">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${
              selectedItem === index ? "bg-white translate-x-[15%]" : ""
            } pr-0 rounded-l-full transform transition-transform duration-300  `}
            onClick={() => handleItemClick(index)}
          >
            {/* TODO:图标 + 链接 */}
            <a className="text-base sm:text-lg md:text-xl lg:text-2xl text-center pr-0 my-1">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
