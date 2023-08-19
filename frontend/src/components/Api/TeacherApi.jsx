import axios from "axios";

class TeacherApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/teachers/";
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    console.log(token);
  }
  async AddTopic({
    name,
    whether_background,
    have_bg_id,
    have_bg_else,
    category,
    synopsis,
    remark,
    post_time,
    grade,
  }) {
    const data = {
      name: name,
      whether_background: whether_background,
      have_bg_id: have_bg_id,
      have_bg_else: have_bg_else,
      category: category,
      synopsis: synopsis,
      remark: remark,
      post_time: post_time,
      grade: grade,
    };
    axios
      .post(this.apiUrl + "topic_info", data, { headers: this.headers })
      .then((response) => {
        console.log("Topic added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding topic:", error);
      });
  }
}

export default TeacherApi;
