import React from "react";
import { useParams } from "react-router-dom";
import StudentApi from "../../components/Api/StudentApi";
import { useDispatch } from "react-redux";
import {
  setAll,
  setBody,
  setName,
  setNote,
} from "../../store/TeacherSubmmitFromSlice";
const StudentGetTopicDataDetail = async ({ token, topic_id }) => {
  const studentApi = new StudentApi({ token });
  const data = await studentApi.getTopicDetails({ topic_id });
  return data;
};

const TopicDetailPage = () => {
  // const [token, setToken] = React.useState("");
  const dispatch = useDispatch();
  const { topic_id } = useParams(); // 使用 topic_id 参数名
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    const token = storedToken.replace(/"/g, "");
    async function fetchInitialData({ token }) {
      const newData = await StudentGetTopicDataDetail({ token, topic_id });
      console.log(newData);
      setData(newData);
      console.log(data);
    }

    fetchInitialData({ token });
  }, [topic_id]);

  //   return <TopicSubmissionPage fuc="update" topic_id={topic_id} />;
  return (
    <div className="flex-col w-full h-full">
      <div className="flex  w-full h-[10%] ">
        <div className="flex w-[20%] h-full items-center justify-center bg-blue-100 text-2xl font-bold">
          name:
        </div>
        <div className="flex w-[80%] h-full items-center justify-center bg-white">
          {setName}
        </div>
      </div>
      <div className="flex  w-full h-[60%] justify-center bg-pink-200">
        <div className="flex w-[20%] h-full items-center justify-center bg-blue-100 text-2xl font-bold">
          synopsis:
        </div>
        <div className="flex w-[80%] h-full items-center justify-center bg-white">
          {setBody}
        </div>
      </div>
      <div className="flex  w-full h-[30%] justify-center bg-blue-200">
        <div className="flex w-[20%] h-full items-center justify-center bg-blue-100 text-2xl font-bold">
          remark:
        </div>
        <div className="flex w-[80%] h-full items-center justify-center bg-white">
          {setNote}
        </div>
      </div>
    </div>
  );
};

export default TopicDetailPage;
