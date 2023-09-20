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
      <div
        className="flex flex-col w-[80%] h-[90%] items-start bg-white"
        style={{ borderRadius: "20px 20px 10px 10px" }}
      >
        <div
          className="flex w-[100%] h-[10%] items-center justify-center bg-gradient-to-b from-blue-500 to-blue-800"
          style={{
            borderRadius: "20px 20px 0px 0px",
            fontSize: "20px",
            color: "white",
          }}
        >
          {data.id}、课题名称: {data.name}
        </div>
        <div className="flex w-[100%] h-[10%] items-center   bg-white">
          <div className="flex w-[20%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[30%] h-[100%] items-center  bg-white">
            课程编号：{data.number}
          </div>
          <div className="flex w-[5%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[45%] h-[100%] items-center  bg-white">
            教师姓名：{data.teacher_name}
          </div>
        </div>
        <div className="flex w-[100%] h-[10%] items-center  bg-white">
          <div className="flex w-[20%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[30%] h-[100%] items-center  bg-white">
            适用专业： {data.major}
          </div>
          <div className="flex w-[5%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[45%] h-[100%] items-center  bg-white">
            课题性质：{data.category}
          </div>
        </div>
        <div className="flex w-[100%] h-[10%] items-center  bg-white">
          <div className="flex w-[20%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[30%] h-[100%] items-center  bg-white">
            年级： {data.grade}
          </div>
          <div className="flex w-[5%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[45%] h-[100%] items-center  bg-white">
            是否有项目背景：{data.whether_background ? "Yes" : "No"}
          </div>
        </div>
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-white">
          <div className="flex w-[20%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[30%] h-[100%] items-center  bg-white">
            项目号：{data.have_bg_id}
          </div>
          <div className="flex w-[5%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[45%] h-[100%] items-center  bg-white">
            其他： {data.have_bg_else}
          </div>
        </div>
        <div className="flex w-[100%] h-[25%] items-center  bg-white">
          <div className="flex w-[10%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[85%] h-[100%] items-center  bg-white">
            简介：
            <p dangerouslySetInnerHTML={{ __html: data.synopsis }} />
          </div>
        </div>
        <div className="flex w-[100%] h-[15%] items-center  bg-white">
          <div className="flex w-[10%] h-[100%] items-center  bg-white"></div>
          <div className="flex w-[90%] h-[100%] items-center  bg-white">
            备注： <p dangerouslySetInnerHTML={{ __html: data.remark }} />
          </div>
        </div>
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-white">
          是否通过: {data.whether_pass ? "Yes" : "No"}
        </div>
      </div>
      <button
        onClick={handlecommit}
        className="w-[20%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
      >
        通过
      </button>
    </div>
  );
};

export default TopicDetailPage;
