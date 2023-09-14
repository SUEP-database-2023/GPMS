import React from "react";
import { Input, Space, Table, Select } from "antd";
import AdminApi from "../../components/Api/AdminApi";
import { ResultExcelButton } from "../../components/ExcelButton";
const columns = [
  {
    title: "课题编号",
    dataIndex: "subjectNumber",
    key: "subjectNumber",
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
  {
    title: "学年",
    dataIndex: "grade",
    key: "grade",
  },
];
const { Search } = Input;
// const suffix = <AudioOutlined style={{ fontSize: 16, color: "#1677ff" }} />;

const getTopicDataList = async ({ token }) => {
  const adminApi = new AdminApi({ token });
  const data = await adminApi.getTopicData();
  const Topic_data = data.map((item, index) => {
    return {
      key: index + 1,
      subjectNumber: item.topic_number,
      studentNumber: item.student_number,
      studentName: item.student_name,
      subjectName: item.topic_name,
      teacher: item.teacher_name,
      grade: item.grade,
    };
  });
  return Topic_data;
};

const TopicResultPage = () => {
  const [data, setData] = React.useState([]);
  const [yearData, setYearData] = React.useState([]);
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

  const currentYear = new Date().getFullYear() + 1;
  const startYear = 2020;

  const items = [];

  for (let year = currentYear; year >= startYear; year--) {
    items.push({
      value: year.toString(),
      label: year.toString(),
    });
  }

  const handleSelect = (value) => {
    if (data) {
      setYearData(data.filter((item) => item.grade === value));
      // TODO 更改数据结构
    }
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <Space direction="vertical" className="w-[90%] items-end">
        <Search placeholder="input search text" style={{ width: 200 }} />
      </Space>
      <Table columns={columns} dataSource={data} className="w-[90%]" />
      <div>
        <Select
          defaultValue={currentYear.toString()}
          options={items}
          onChange={handleSelect}
        />
        <a>年的</a>
        <ResultExcelButton data={yearData} />
        {/* TODO 修改UI */}
      </div>
    </div>
  );
};
export default TopicResultPage;
