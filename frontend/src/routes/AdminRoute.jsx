import React from "react";
import Sidebar from "../components/Layout/Sidebar";
import AdminPage from "../pages/Adminpage";
const items = [
  {
    title: "参数设置",
    path: "/admin/setting",
    icon: "setting",
  },
  {
    title: "课题审核",
    path: "/admin/audit",
    icon: "audit",
  },
  {
    title: "选课操作",
    path: "/admin/operation",
    icon: "operation",
  },
  {
    title: "选课结果",
    path: "/admin/result",
    icon: "result",
  },
  {
    title: "修改密码",
    path: "/admin/password",
    icon: "password",
  },
];
const AdminRoute = () => {
  return (
    <div>
      <Sidebar main={<AdminPage />} items={items} />
    </div>
  );
};

export default AdminRoute;
