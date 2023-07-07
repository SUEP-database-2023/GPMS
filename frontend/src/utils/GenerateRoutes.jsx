import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MyLayOut } from "../components";

const GenerateRoutes = ({ items, title }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={items[0].path} replace />} />
      {items.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={<MyLayOut items={items} page={item.element} title={title} />}
        />
      ))}
    </Routes>
  );
};
export default GenerateRoutes;
