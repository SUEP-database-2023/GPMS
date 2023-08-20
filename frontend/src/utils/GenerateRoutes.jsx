import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MyLayOut } from "../components";

const GenerateRoutes = ({ items, title }) => {
  const Items = items.filter((item) => item.title !== "extra");
  return (
    <Routes>
      <Route path="/" element={<Navigate to={items[0].path} replace />} />
      {items.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            element={
              <MyLayOut items={Items} page={item.element} title={title} />
            }
          />
        );
      })}
    </Routes>
  );
};
export default GenerateRoutes;
