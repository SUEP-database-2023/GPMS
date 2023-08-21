import React, { useEffect, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Table, Tag } from "antd";
import TeacherApi from "../../components/Api/TeacherApi";
import { TextLine } from "../../components/Text/Textline";
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
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
    title: "专业",
    dataIndex: "major",
    key: "major",
  },
  {
    title: "班级",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "联系电话",
    dataIndex: "telephone",
    key: "telephone",
  },
  {
    title: "课题名称",
    dataIndex: "subjectName",
    key: "subjectName",
  },
];

const TeacherSelectedData = async ({ token }) => {
  const teacherApi = new TeacherApi({ token });
  const newdata = await teacherApi.TeacherSelected();
  const Topic_data = newdata.map((item, index) => {
    return {
      id: index + 1,
      key: index + 1,
      studentNumber: item.student_number,
      studentName: item.student_name,
      major: item.student_major,
      class: item.student_team,
      telephone: item.student_phone,
      subjectName: item.name,
    };
  });

  return Topic_data;
};

const TopicResultPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");

    async function fetchInitialData({ token }) {
      const newData = await TeacherSelectedData({ token });
      setData(newData);
    }
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      fetchInitialData({ token });
    }
  }, []);
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%] ">
        <TextLine
          text="
          请注意！教师提交毕业设计题目的截止时间：xxxx/xx/xx，届时系统将无法提交和更新课题信息！"
          size="2xl"
          colour="text-red-500"
        />
      </div>
      <div className="flex flex-col w-[90%]">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default TopicResultPage;
