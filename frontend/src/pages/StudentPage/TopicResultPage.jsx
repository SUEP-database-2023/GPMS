import React from "react";
import { Space, Table, Tag } from "antd";
import StudentApi from "../../components/Api/StudentApi";
const columns = [
  {
    title: "课题编号",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "课题名称",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "指导老师",
    key: "teacher_name",
    dataIndex: "teacher_name",
  },
];

const getResult = async ({ token }) => {
  const studentApi = new StudentApi({ token });
  const data = await studentApi.getResult();
  const Result_data = [
    {
      key: 1,
      number: data.number,
      teacher_name: data.teacher_name,
      name: data.name,
    },
  ];
  return Result_data;
};

const TopicResultPage = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
    async function fetchInitialData({ token }) {
      const newData = await getResult({ token });
      setData(newData);
    }
  }, []);
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default TopicResultPage;
