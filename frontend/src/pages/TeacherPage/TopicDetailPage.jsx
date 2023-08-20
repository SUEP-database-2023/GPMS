import React from "react";
import { useParams } from "react-router-dom";
import TeacherApi from "../../components/Api/TeacherApi";
import { useSelector } from "react-redux";
import { setAll } from "../../store/TeacherSubmmitFromSlice";
import { useDispatch } from "react-redux";
import TopicSubmissionPage from "./TopicSubmissionPage";
const TeacherGetTopicDataDetail = async ({ token, topic_id }) => {
  const teacherApi = new TeacherApi({ token });
  const data = await teacherApi.GetTopic({ topic_id });

  return data;
};

const TopicDetailPage = () => {
  const dispatch = useDispatch();
  const TeacherSubmitForm = useSelector((state) => state.TeacherSubmitForm);
  const { body, note } = TeacherSubmitForm;

  console.log(body);
  const { topic_id } = useParams(); // 使用 topic_id 参数名
  const token = useSelector((state) => state.user.access_token);
  React.useEffect(() => {
    async function fetchInitialData() {
      const newData = await TeacherGetTopicDataDetail({ token, topic_id });
      dispatch(setAll(newData));
    }

    fetchInitialData();
  }, [topic_id]);

  return <TopicSubmissionPage body={body} note={note} />;
};

export default TopicDetailPage;
