import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Menu = ({ items }) => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();

  const handleItemClick = (item) => {
    navigate(item.url);
  };

  useEffect(() => {
    const path = location.pathname;
    const item = items.find((item) => item.url === path);
    setSelectedItem(item.id);
  }, [location.pathname]);

  return (
    <div>
      <ul className="menu sm:menu-sm md:menu-md lg:menu-lg overflow-hidden">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${
              selectedItem === item.id ? "bg-white translate-x-[15%]" : ""
            } pr-0 rounded-l-full transform transition-transform duration-300  disabled:active flex flex-row items-center`}
            onClick={() => handleItemClick(item)}
          >
            {item.icon}
            <a className="text-base sm:text-lg md:text-xl lg:text-2xl text-center pl-0 my-1">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
