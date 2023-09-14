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
    <div>
      {/* TODO UI修改 */}
      <div>ID: {data.id}</div>
      <div>Number: {data.number}</div>
      <div>Name: {data.name}</div>
      <div>Whether Background: {data.whether_background ? "Yes" : "No"}</div>
      <div>Have Background ID: {data.have_bg_id}</div>
      <div>Have Background Else: {data.have_bg_else}</div>
      <div>Category: {data.category}</div>
      <div>
        Synopsis: <p dangerouslySetInnerHTML={{ __html: data.synopsis }} />
      </div>
      <div>
        Remark: <p dangerouslySetInnerHTML={{ __html: data.remark }} />
      </div>
      <div>User ID: {data.user_id}</div>
      <div>Teacher Name: {data.teacher_name}</div>
      <div>Whether Pass: {data.whether_pass ? "Yes" : "No"}</div>
      <div>Major: {data.major}</div>
      <div>Grade: {data.grade}</div>
      <button onClick={handlecommit}>通过</button>
    </div>
  );
};

export default TopicDetailPage;
