import React from "react";
import {
  TopicSubmissionPage,
  TopicListPage,
  TopicResultPage,
  PasswordUpdatePage,
} from "../pages/TeacherPage";
import {
  FileAddOutlined,
  ScheduleOutlined,
  FileDoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { GenerateRoutes, SetIcon } from "../utils";

const items = [
  {
    id: "1",
    title: "课题提交",
    path: "TopicSubmissionPage",
    url: "/teacher/TopicSubmissionPage",
    icon: <SetIcon icon={FileAddOutlined} />,
    element: <TopicSubmissionPage />,
  },
  {
    id: "2",
    title: "选课列表",
    path: "TopicListPage",
    url: "/teacher/TopicListPage",
    icon: <SetIcon icon={ScheduleOutlined} />,
    element: <TopicListPage />,
  },
  {
    id: "3",
    title: "选课结果",
    path: "TopicResultPage",
    url: "/teacher/TopicResultPage",
    icon: <SetIcon icon={FileDoneOutlined} />,
    element: <TopicResultPage />,
  },
  {
    id: "4",
    title: "修改密码",
    path: "PasswordUpdatePage",
    url: "/teacher/PasswordUpdatePage",
    icon: <SetIcon icon={LockOutlined} />,
    element: <PasswordUpdatePage />,
  },
];

const TeacherRoute = () => {
  return <> {GenerateRoutes({ items: items, title: "Teacher" })} </>;
};

export default TeacherRoute;
