import React from "react";
import { useParams } from "react-router-dom";
import AdminApi from "../../components/Api/AdminApi";
const AdminGetTopicDataDetail = async ({ token, topic_id }) => {
  const adminApi = new AdminApi({ token });
  const data = await adminApi.getDetailTopicData({ topic_id: topic_id });
  return data;
};

const TopicDetailPage = () => {
  const [data, setData] = React.useState([]);
  const { topic_id } = useParams(); // 使用 topic_id 参数名

  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    const token = storedToken.replace(/"/g, "");
    async function fetchInitialData({ token }) {
      const newData = await AdminGetTopicDataDetail({ token, topic_id });
      setData(newData);
    }

    fetchInitialData({ token });
  }, [topic_id]);

  const handlecommit = () => {
    const commitData = [
      {
        id: data.id,
      },
    ];
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      const adminApi = new AdminApi({ token });
      adminApi.AuditTopic({ data: commitData });
    }
  };

  return (
    <div className="flex flex-col w-[100%] h-[100%] items-center bg-white-100 ">
      <div className="flex flex-col w-[80%] h-[90%] items-start bg-blue-100">
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-200">
        {data.id}、课题名称: {data.name}
        </div>
        <div className="flex w-[100%] h-[10%] items-center   bg-blue-300">
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          课程编号：{data.number}
          </div>
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          教师姓名：{data.teacher_name}
          </div>
        </div>
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-100">
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          适用专业： {data.major}
          </div>
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          课题性质：{data.category}
          </div>
        </div>
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-100">
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          年级： {data.grade}
          </div>
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          是否有项目背景：{data.whether_background ? "Yes" : "No"}
          </div>
        </div>
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-100">
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          项目号：{data.have_bg_id}
          </div>
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-100">
          其他： {data.have_bg_else}
          </div>
        </div>
        <div className="flex w-[100%] h-[30%] items-center justify-center bg-blue-100">
        简介：
         {/* <p dangerouslySetInnerHTML={{ __html: data.synopsis }} /> */}
        </div>
        <div className="flex w-[100%] h-[30%] items-center justify-center bg-blue-100">
        备注： <p dangerouslySetInnerHTML={{ __html: data.remark }} />
        </div>
      </div>  
      <button onClick={handlecommit}
      className="w-[20%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
      >通过</button>
    </div>
    // <div>
    // <div>ID: {data.id}</div>
    // <div>Number: {data.number}</div>
    // <div>Name: {data.name}</div>
    // <div>Whether Background: {data.whether_background ? "Yes" : "No"}</div>
    // <div>Have Background ID: {data.have_bg_id}</div>
    // <div>Have Background Else: {data.have_bg_else}</div>
    // <div>Category: {data.category}</div>
    // <div>
    //   Synopsis: <p dangerouslySetInnerHTML={{ __html: data.synopsis }} />
    // </div>
    // <div>
    //   Remark: <p dangerouslySetInnerHTML={{ __html: data.remark }} />
    // </div>
    // <div>User ID: {data.user_id}</div>
    // <div>Teacher Name: {data.teacher_name}</div>
    // <div>Whether Pass: {data.whether_pass ? "Yes" : "No"}</div>
    // <div>Major: {data.major}</div>
    // <div>Grade: {data.grade}</div>
    // <button onClick={handlecommit}>通过</button>
    // </div>
  );
};

export default TopicDetailPage;
