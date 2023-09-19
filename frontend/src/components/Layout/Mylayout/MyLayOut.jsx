import React, { useEffect } from "react";
import { Sidebar } from "../Sidebar";
import { Body } from "../Body";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const MyLayOut = ({ items, page, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const identity = useSelector((state) => state.user.identity);
  const initialPath = useSelector((state) => state.user.initialPath);
  const path = location.pathname;

  useEffect(() => {
    if (path.startsWith("/admin") && identity !== "0") {
      navigate(initialPath);
    } else if (path.startsWith("/teacher") && identity !== "1") {
      navigate(initialPath);
    } else if (path.startsWith("/student") && identity !== "2") {
      navigate(initialPath);
    }
  }, []);

  return (
    <div className="flex h-screen w-screen min-w-[1500px] min-h-[700px]">
      <Sidebar items={items} />
      <Body page={page} title={title} />
    </div>
  );
};

export default MyLayOut;
