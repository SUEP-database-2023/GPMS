import React from "react";
import { useParams } from "react-router-dom";
import TeacherApi from "../../components/Api/TeacherApi";
import { useSelector, useDispatch } from "react-redux";
import { setAll } from "../../store/TeacherSubmmitFromSlice";
import TopicSubmissionPage from "./TopicSubmissionPage";
import { t } from "@wangeditor/core";
const TeacherGetTopicDataDetail = async ({ token, topic_id }) => {
  const teacherApi = new TeacherApi({ token });
  const data = await teacherApi.GetTopic({ topic_id });

  return data;
};

const TopicDetailPage = () => {
  // const [token, setToken] = React.useState("");
  const dispatch = useDispatch();
  const { topic_id } = useParams(); // 使用 topic_id 参数名

  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      const token1 = storedToken.replace(/"/g, "");
    }
  }, []);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    const token = storedToken.replace(/"/g, "");
    async function fetchInitialData({ token }) {
      const newData = await TeacherGetTopicDataDetail({ token, topic_id });
      dispatch(setAll(newData));
    }

    fetchInitialData({ token });
  }, [topic_id]);

  return <TopicSubmissionPage fuc="update" topic_id={topic_id} />;
};

export default TopicDetailPage;
