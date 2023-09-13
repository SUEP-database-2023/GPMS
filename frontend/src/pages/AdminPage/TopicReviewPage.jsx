import React, { useState, useEffect } from "react";
import { Divider, Radio, Table } from "antd";
import AdminApi from "../../components/Api/AdminApi";
import { Link } from "react-router-dom";
const currentYear = new Date().getFullYear() + 1;
const startYear = 2024;

const filteyear = [];

for (let year = startYear; year <= currentYear; year++) {
  filteyear.push({
    text: year.toString(),
    value: year.toString(),
  });
}

const filtepass = [
  {
    text: "通过",
    value: "通过",
  },
  {
    text: "未通过",
    value: "未通过",
  },
];

const filtemajor = [
  {
    text: "信计",
    value: "信计",
  },
  {
    text: "应物",
    value: "应物",
  },
];

const columns = [
  {
    title: "序号",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "课题编号",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "课题名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "指导老师",
    key: "teacher_name",
    dataIndex: "teacher_name",
  },
  {
    title: "专业",
    key: "major",
    dataIndex: "major",
    filters: filtemajor,
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.major.startsWith(value),
  },
  {
    title: "是否通过",
    key: "whether_pass",
    dataIndex: "whether_pass",
    filters: filtepass,
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.whether_pass.startsWith(value),
  },
  {
    title: "年级",
    key: "grade",
    dataIndex: "grade",
    filters: filteyear,
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.grade.startsWith(value),
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Link
        to={`/admin/TopicDetailPage/${record.id}`}
        className="text-blue-500"
      >
        查看
      </Link>
    ),
  },
];

const TopicData = async ({ token }) => {
  const adminApi = new AdminApi({ token });
  const newdata = await adminApi.getAllTopicData();
  const Topic_data = newdata.map((item, index) => {
    let pass = "未通过";
    if (item.whether_pass === true) pass = "通过";
    return {
      id: item.id,
      key: index + 1,
      number: item.number,
      name: item.name,
      teacher_name: item.teacher_name,
      whether_pass: pass,
      whether_passed_bool: item.whether_pass,
      major: item.major,
      grade: item.grade,
    };
  });

  return Topic_data;
};

const TopicReviewPage = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [data, setData] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    async function fetchInitialData({ token }) {
      const newData = await TopicData({ token });
      setData(newData);
    }
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    async function fetchInitialData({ token }) {
      const newData = await TopicData({ token });
      setData(newData);
    }
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
  }, [buttonClicked]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectionType(selectedRows);
    },
  };

  const handlecommit = () => {
    if (selectionType) {
      const data = selectionType
        .filter((selection) => selection.whether_passed_bool === false)
        .map((selection) => {
          return {
            id: selection.id,
          };
        });
      const storedToken = localStorage.getItem("access_token");

      if (storedToken) {
        const token = storedToken.replace(/"/g, "");
        const adminApi = new AdminApi({ token });
        adminApi.AuditTopic({ data });
        setButtonClicked(!buttonClicked);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
      <button onClick={handlecommit}>通过</button>
    </div>
  );
};
export default TopicReviewPage;
