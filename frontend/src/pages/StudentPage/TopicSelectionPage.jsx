import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "课题编号",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "课题名称",
    dataIndex: "age",
    key: "age",
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
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tags: ["cool", "teacher"],
  },
];
const TopicSelectionPage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default TopicSelectionPage;
