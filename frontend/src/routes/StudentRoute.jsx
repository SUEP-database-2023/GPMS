import React from "react";
import SelectionRules from "../pages/StudentPage/SelectionRules";
import ProjectSubmit from "../pages/StudentPage/ProjectSubmit";
import CourseSelection from "../pages/StudentPage/CourseSelection";
import SelectionResults from "../pages/StudentPage/SelectionResults";
import SystemSettings from "../pages/StudentPage/SystemSettings";
import MyLayOut from "../components/Layout/MyLayOut";
import {
  ProfileOutlined,
  FolderOutlined,
  ControlOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../index.css";

const menuItems = [
  {
    key: "1",
    label: "选课规则",
    icon: <ProfileOutlined />,
    url: "SelectionRules",
    element: <SelectionRules />,
  },
  {
    key: "2",
    label: "课题提交",
    icon: <FolderOutlined />,
    url: "ProjectSubmit",
    element: <ProjectSubmit />,
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
    url: "SelectionResults",
    element: <SelectionResults />,
  },
  {
    key: "5",
    label: "系统设置",
    icon: <SettingOutlined />,
    url: "SystemSettings",
    element: <SystemSettings />,
  },
];

const TeacherRoute = () => {
  return (
    <>
      <MyLayOut menuItems={menuItems} />
    </>
  );
};

export default TeacherRoute;
