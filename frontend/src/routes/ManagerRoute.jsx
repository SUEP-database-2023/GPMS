import React, { useEffect, useState } from "react";
import ParameterSettings from "../pages/ManagerPage/ParameterSettings";
import SubjectReview from "../pages/ManagerPage/SubjectReview";
import CourseSelection from "../pages/ManagerPage/CourseSelection";
import ExtraFeatures from "../pages/ManagerPage/ExtraFeatures";
import SelectionResult from "../pages/ManagerPage/SelectionResult";
import SystemSettings from "../pages/ManagerPage/SystemSettings";
import MyLayOut from "../components/LayOut";
import {
  DesktopOutlined,
  FolderOutlined,
  ControlOutlined,
  MailOutlined,
  FolderAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../index.css";

const menuItems = [
  {
    key: "1",
    label: "参数设置",
    icon: <DesktopOutlined />,
    url: "ParameterSettings",
    element: <ParameterSettings />,
  },
  {
    key: "2",
    label: "课题审核",
    icon: <FolderOutlined />,
    url: "SubjectReview",
    element: <SubjectReview />,
  },
  {
    key: "3",
    label: "选课操作",
    icon: <ControlOutlined />,
    url: "CourseSelection",
    element: <CourseSelection />,
  },
  {
    key: "4",
    label: "选课结果",
    icon: <MailOutlined />,
    url: "SelectionResult",
    element: <SelectionResult />,
  },
  {
    key: "5",
    label: "额外功能",
    icon: <FolderAddOutlined />,
    url: "ExtraFeatures",
    element: <ExtraFeatures />,
  },
  {
    key: "6",
    label: "系统设置",
    icon: <SettingOutlined />,
    url: "SystemSettings",
    element: <SystemSettings />,
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
