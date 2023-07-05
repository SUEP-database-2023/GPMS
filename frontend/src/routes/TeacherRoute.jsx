import React from "react";
import SubjectInfo from "../pages/TeacherPage/SubjectInfo";
import ProjectSubmit from "../pages/TeacherPage/ProjectSubmit";
import CourseSelection from "../pages/TeacherPage/CourseSelection";
import SelectionResults from "../pages/TeacherPage/SelectionResults";
import SystemSettings from "../pages/TeacherPage/SystemSettings";
import MyLayOut from "../components/Layout/MyLayOut";
import {
  ProfileOutlined,
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
    label: "课题信息",
    icon: <ProfileOutlined />,
    url: "SubjectInfo",
    element: <SubjectInfo />,
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
