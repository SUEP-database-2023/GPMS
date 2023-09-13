import axios from "axios";

class AdminApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/admin/";
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    this.no_params_headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
  }

  async updateRound({ round }) {
    const data = { round: round };
    await axios
      .put(this.apiUrl + `update/round`, data, {
        headers: this.headers,
      })
      .then((response) => {
        console.log("parameter update successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating:", error);
      });
  }
  async updateTime({
    id,
    teacher_post_time,
    admin_audit_time,
    student_begin_time1,
    student_end_time1,
    admin_end_time1,
    student_end_time2,
    admin_end_time2,
    major,
  }) {
    const data = {
      teacher_post_time: teacher_post_time,
      admin_audit_time: admin_audit_time,
      student_begin_time1: student_begin_time1,
      student_end_time1: student_end_time1,
      admin_end_time1: admin_end_time1,
      student_end_time2: student_end_time2,
      admin_end_time2: admin_end_time2,
      major: major,
    };
    axios
      .put(this.apiUrl + `update/end_time/${id}`, data, {
        headers: this.headers,
      })
      .then((response) => {
        console.log("parameter set successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error setting:", error);
      });
  }

  async resetPassword({ number }) {
    const data = { number: number };
    await axios
      .put(this.apiUrl + `update/user/`, data, { headers: this.headers })
      .then((response) => {
        console.log("Password reset successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error resetting password:", error);
      });
  }

  async getTopicData() {
    try {
      const response = await axios.get(this.apiUrl + "get/allresult", {
        headers: this.no_params_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }
  async getAllTopicData() {
    try {
      const response = await axios.get(this.apiUrl + "topics", {
        headers: this.no_params_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }

  async getDetailTopicData({ topic_id }) {
    try {
      const response = await axios.get(this.apiUrl + `topic/${topic_id}`, {
        headers: this.no_params_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }
  async assignTopics({ studentID, topicID }) {
    const data = { student_number: studentID, topic_number: topicID };
    await axios
      .put(this.apiUrl + `force_assign_topics`, data, {
        headers: this.headers,
      })
      .then((response) => {
        console.log("forceAssign successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async firstAssignTopics() {
    await axios
      .get(this.apiUrl + `start_matching/2020/1`, {
        headers: this.no_params_headers,
      })
      .then((response) => {
        console.log("firstAssign successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async secondAssignTopics() {
    await axios
      .get(this.apiUrl + `start_matching/2020/2`, {
        headers: this.no_params_headers,
      })
      .then((response) => {
        console.log("secondAssign successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async AuditTopic({ data }) {
    try {
      await axios.put(this.apiUrl + "update/audit_topic", data, {
        headers: this.headers,
      });
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }
}

export default AdminApi;
