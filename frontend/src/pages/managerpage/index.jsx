import React, { useEffect, useState } from "react";
import ParameterSettings from "./ParameterSettings";
import SubjectReview from "./SubjectReview";
import MyLayOut from "../../components/LayOut";
import "../../index.css";

const menuItems = [
  {
    key: "1",
    label: "参数设置",
    url: "ParameterSettings",
    element: <ParameterSettings />,
  },
  {
    key: "2",
    label: "课题审核",
    url: "SubjectReview",
    element: <SubjectReview />,
  },
];

function ManagerRoute() {
  return (
    <>
      <MyLayOut menuItems={menuItems} />
    </>
  );
}
export default ManagerRoute;
