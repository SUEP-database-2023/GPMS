import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import {Input, Space, Table, Tag } from "antd";
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "学号",
    dataIndex: "student number",
    key: "student number",
  },
  {
    title: "姓名",
    dataIndex: "student name",
    key: "student name",
  },
  {
    title: "专业",
    dataIndex: "major",
    key: "major",
  },
  {
    title: "班级",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "联系电话",
    dataIndex: "telephone",
    key: "telephone",
  },
  {
    title: "课题名称",
    dataIndex: "subject name",
    key: "subject name",
  },
  
];
const TopicResultPage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%] items-center justify-center bg-blue-200">
      请注意！教师提交毕业设计题目的截止时间：xxxx/xx/xx，届时系统将无法提交和更新课题信息！
      </div>
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} />
      </div>
    </div>
  );
};
export default TopicResultPage;
