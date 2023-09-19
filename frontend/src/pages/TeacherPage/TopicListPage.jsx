import React from "react";
import { Space, Table, Tag } from "antd";
import { TextLine } from "../../components/Text/Textline";
import { useSelector } from "react-redux";
// import TeacherGetTopicData from "../../utils/TeacherGetTopicData";
import TeacherApi from "../../components/Api/TeacherApi";
import { Link } from "react-router-dom";

const haddleDelete = (id) => {
  console.log("delete", id);
};

const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "课题名称",
    dataIndex: "subjectName",
    key: "subjectName",
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
        <Link
          to={`/teacher/TopicDetailPage/${record.topic_id}`}
          className="text-blue-500"
        >
          查看/修改
        </Link>
      </Space>
    ),
  },
];

const TeacherGetTopicData = async ({ token }) => {
  const teacherApi = new TeacherApi({ token });
  const data = await teacherApi.GetTopics();
  const Topic_data = data.map((item, index) => {
    return {
      id: index + 1,
      key: index + 1,
      topic_id: item.id,
      subjectName: item.name,
      major: item.major,
    };
  });

  return Topic_data;
};

const TopicListPage = () => {
  const [data, setData] = React.useState([]);
  // const token = useSelector((state) => state.user.access_token);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
    async function fetchInitialData({ token }) {
      const newData = await TeacherGetTopicData({ token });
      setData(newData);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
        <TextLine
          text="
          请注意！教师提交毕业设计题目的截止时间：xxxx/xx/xx，届时系统将无法提交和更新课题信息！"
          size="2xl"
          colour="text-red-500"
        />
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default TopicListPage;
