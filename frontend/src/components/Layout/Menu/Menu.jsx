import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu } from "antd";

const MyMenu = ({ items }) => {
  // const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const Item = items.map((item) => {
    return {
      label: (
        <Link className="flex items-center text-xl" to={item.url}>
          {item.title}
        </Link>
      ),
      key: item.id,
      icon: <div>{item.icon}</div>,
    };
  });

  // const handleItemClick = (item) => {
  //   navigate(item.url);
  // };

  useEffect(() => {
    const path = location.pathname;
    const item = items.find((item) => item.url === path);
    setSelectedItem(item.id);
  }, [location.pathname]);

  return (
    <div>
      <Menu
        mode="inline"
        // defaultSelectedKeys={`${selectedItem}`}
        defaultSelectedKeys={"1"}
        items={Item}
        className="bg-transparent"
      />
      {/* <ul className="menu overflow-hidden">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${
              selectedItem === item.id ? "bg-gray-200 translate-x-[15%]" : ""
            } pr-0 rounded-l-full transform transition-transform duration-300  disabled:active flex flex-row items-center`}
            onClick={() => handleItemClick(item)}
          >
            {item.icon}
            <a className="text-xl text-center pl-0 my-1">{item.title}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default MyMenu;
