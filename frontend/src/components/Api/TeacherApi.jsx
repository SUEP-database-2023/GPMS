import axios from "axios";

class TeacherApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/teachers/";
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    this.get_headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
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

  async GetTopics() {
    try {
      const response = await axios.get(this.apiUrl + "get_topics", {
        headers: this.get_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }

  async GetTopic({ topic_id }) {
    try {
      const response = await axios.get(this.apiUrl + "get_topic/" + topic_id, {
        headers: this.get_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topic:", error);
    }
  }

  async UpdateTopic({
    topic_id,
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
      .put(this.apiUrl + "topic_info/" + topic_id, data, {
        headers: this.headers,
      })
      .then((response) => {
        console.log("Topic updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating topic:", error);
      });
  }
}

export default TeacherApi;
