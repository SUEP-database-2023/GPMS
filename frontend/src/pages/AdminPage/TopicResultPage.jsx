import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import {Input, Space, Table, Tag } from "antd";
const columns = [
  {
    title: "课题编号",
    dataIndex: "subject number",
    key: "subject number",
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
    title: "课题名称",
    dataIndex: "subject name",
    key: "subject name",
  },
  {
    title: "项目背景",
    dataIndex: "background",
    key: "background",
  },
  {
    title: "项目号",
    dataIndex: "item number",
    key: "item number",
  },
  {
    title: "其他",
    dataIndex: "other",
    key: "other",
  },
  {
    title: "课题性质",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "指导老师",
    key: "teacher",
    dataIndex: "teacher",
  },
];
const { Search } = Input;
const suffix = (<AudioOutlined style={{fontSize: 16, color: '#1677ff',}}/>);

const TopicResultPage = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%] items-end">
      {/* 搜索框 */}
      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} style={{width: 200,}}/>
      </Space>
      </div>
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} />
      </div>
    </div>
  );
};
export default TopicResultPage;
