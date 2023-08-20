import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Table, Tag } from "antd";
import AdminApi from "../../components/Api/AdminApi";
const columns = [
  {
    title: "课题编号",
    dataIndex: "subjectNumber",
    key: "subjectNumber",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "学号",
    dataIndex: "studentNumber",
    key: "studentNumber",
  },
  {
    title: "姓名",
    dataIndex: "studentName",
    key: "studentName",
  },
  {
    title: "课题名称",
    dataIndex: "subjectName",
    key: "subjectName",
  },
  {
    title: "指导老师",
    key: "teacher",
    dataIndex: "teacher",
  },
];
const { Search } = Input;
// const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1677ff" }} />;

const getTopicDataList = async ({ token }) => {
  const adminApi = new AdminApi({ token });
  const data = await adminApi.getTopicData();
  console.log(data);
  const Topic_data = data.map((item, index) => {
    return {
      key: index + 1,
      subjectNumber: item.topic_number,
      studentNumber: item.student_number,
      studentName: item.student_name,
      subjectName: item.topic_name,
      teacher: item.teacher_name,
    };
  });
  return Topic_data;
};

const TopicResultPage = () => {
  const onSearch = (value) => console.log(value);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function fetchInitialData({ token }) {
      const newData = await getTopicDataList({ token });
      setData(newData);
    }

    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
  }, []);

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%] items-end">
        {/* 搜索框 */}
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </Space>
      </div>
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default TopicResultPage;
