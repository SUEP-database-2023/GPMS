import React from "react";
import { Space, Table, Tag } from "antd";
import StudentApi from "../../components/Api/StudentApi";
const columns = [
  {
    title: "志愿",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "课题编号",
    dataIndex: "topic_id",
    key: "topic_id",
  },
  {
    title: "课题名称",
    key: "topic_name",
    dataIndex: "topic_name",
  },
];

const GetVolunteerData = async ({ token }) => {
  const studentApi = new StudentApi({ token });
  const data = await studentApi.getSelection();
  const Volunteer_Data = [
    {
      name: "第一志愿",
      topic_id: data.choice1_number,
      topic_name: data.choice1_name,
      key: data.choice1_id,
    },
    {
      name: "第二志愿",
      topic_id: data.choice2_number,
      topic_name: data.choice2_name,
      key: data.choice2_id,
    },
    {
      name: "第三志愿",
      topic_id: data.choice3_number,
      topic_name: data.choice3_name,
      key: data.choice3_id,
    },
    {
      name: "第四志愿",
      topic_id: data.choice4_number,
      topic_name: data.choice4_name,
      key: data.choice4_id,
    },
  ];

  return Volunteer_Data;
};

const VolunteerSelectionPage = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
    async function fetchInitialData({ token }) {
      const newData = await GetVolunteerData({ token });
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
export default VolunteerSelectionPage;
