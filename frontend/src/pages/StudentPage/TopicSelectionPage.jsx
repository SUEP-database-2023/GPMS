import React from "react";
import { Space, Table, Radio } from "antd";
import StudentApi from "../../components/Api/StudentApi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { commit } from "../../store/StudentChoiceSlice";
import { StudentRadio } from "../../components/StudentRadio";

const getTopics = async ({ token }) => {
  const studentApi = new StudentApi({ token });
  const data = await studentApi.getAllTopics();
  const Topic_data = data.map((item, index) => {
    return {
      id: item.id,
      key: index + 1,
      topic_id: item.number,
      topic_name: item.name,
      topic_category: item.category,
    };
  });
  return Topic_data;
};
const TopicSelectionPage = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "课题编号",
      dataIndex: "topic_id",
      key: "topic_id",
    },
    {
      title: "课题名称",
      dataIndex: "topic_name",
      key: "topic_name",
    },
    {
      title: "课题类别",
      dataIndex: "topic_category",
      key: "topic_category",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/student/TopicDetailPage/${record.id}`}
            className="text-blue-500"
          >
            查看
          </Link>

          <StudentRadio id={record.id} />
        </Space>
      ),
    },
  ];

  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
    async function fetchInitialData({ token }) {
      const newData = await getTopics({ token });
      setData(newData);
    }
  }, []);

  const handlecommit = () => {
    dispatch(commit());
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} dataSource={data} />
        {/* TODO 修改UI */}
        <button onClick={handlecommit}>提交</button>
      </div>
    </div>
  );
};
export default TopicSelectionPage;
