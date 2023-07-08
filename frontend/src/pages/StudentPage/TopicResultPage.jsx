import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "志愿编号",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "课题编号",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "课题名称",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "指导老师",
    key: "action",
  },
];

const TopicResultPage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} />
      </div>
    </div>
  );
};
export default TopicResultPage;
