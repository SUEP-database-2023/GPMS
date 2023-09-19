import React from "react";
import TeacherApi from "../components/Api/TeacherApi";
const TeacherGetTopicData = ({ token }) => {
  const teacherApi = new TeacherApi({ token });
  const data = teacherApi.GetTopics();

  const Topic_data = data.map((item, index) => {
    return {
      id: index,
      topic_id: item.id,
      "subject name": item.name,
      major: item.category,
    };
  });

  return Topic_data;
};

export default TeacherGetTopicData;
