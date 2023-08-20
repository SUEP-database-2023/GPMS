import axios from "axios";

class AdminApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/admin/";
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    this.noparamsheaders = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  async resetPassword({ number }) {
    const data = { number: number };
    axios
      .put(this.apiUrl + `update/user/`, data, { headers: this.headers })
      .then((response) => {
        console.log("Password reset successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error resetting password:", error);
      });
  }
  async assignTopics({studentID,topicID}) {
    axios
      .put(this.apiUrl + `force_assign_topics/${studentID}/${topicID}`, {}, { headers: this.noparamsheaders })
      .then((response) => {
        console.log("forceAssign successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async firstAssignTopics() {
    axios
      .put(this.apiUrl + `start_matching/2020/1`, {}, { headers: this.noparamsheaders })
      .then((response) => {
        console.log("firstAssign successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  async secondAssignTopics() {
    axios
      .put(this.apiUrl + `start_matching/2020/2`, {}, { headers: this.noparamsheaders })
      .then((response) => {
        console.log("secondAssign successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

export default AdminApi ;
