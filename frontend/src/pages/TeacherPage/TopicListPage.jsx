import React from "react";
import { Space, Table, Tag } from "antd";
import { TextLine } from "../../components/Text/Textline";
import { useSelector } from "react-redux";
import TeacherGetTopicData from "../../utils/TeacherGetTopicData";
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "课题名称",
    dataIndex: "subject name",
    key: "subject name",
  },
  {
    title: "适用专业",
    key: "major",
    dataIndex: "major",
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
const TopicListPage = () => {
  const token = useSelector((state) => state.user.access_token);

  const data = TeacherGetTopicData({ token });
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
        <TextLine
          text="
          请注意！教师提交毕业设计题目的截止时间：xxxx/xx/xx，届时系统将无法提交和更新课题信息！"
          size="2xl"
          colour="text-red-500"
        />
        <Table columns={columns} />
      </div>
    </div>
  );
};
export default TopicListPage;
