import axios from "axios";

class StudentApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/students/";
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
  async addSelections({
    status_id,
    choice1_id,
    choice2_id,
    choice3_id,
    choice4_id,
    time,
  }) {
    const data = {
      choice1_id: choice1_id,
      choice2_id: choice2_id,
      choice3_id: choice3_id,
      choice4_id: choice4_id,
      time: time,
    };
    axios
      .post(this.apiUrl + `topic/${status_id}`, data, {
        headers: this.headers,
      })
      .then((response) => {
        console.log("Select successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error selecting:", error);
      });
  }
  async getAllTopics() {
    axios
      .get(this.apiUrl + `topic`, {
        headers: this.no_params_headers,
      })
      .then((response) => {
        console.log("get successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error getting:", error);
      });
  }
  async getTopicDetails({ id, topic_name, topic_synopsis, topic_remark }) {
    const data = {
      topic_name: topic_name,
      topic_synopsis: topic_synopsis,
      topic_remark: topic_remark,
    };
    axios
      .get(this.apiUrl + `topic/${id}`, data, {
        headers: this.no_params_headers,
      })
      .then((response) => {
        console.log("get successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error getting:", error);
      });
  }
  async getSelection({
    status_id,
    choice1_id,
    choice2_id,
    choice3_id,
    choice4_id,
    time,
    choice1_number,
    choice2_number,
    choice3_number,
    choice4_number,
    choice1_name,
    choice2_name,
    choice3_name,
    choice4_name,
  }) {
    const data = {
      status_id: status_id,
      choice1_id: choice1_id,
      choice2_id: choice2_id,
      choice3_id: choice3_id,
      choice4_id: choice4_id,
      time: time,
      choice1_number: choice1_number,
      choice2_number: choice2_number,
      choice3_number: choice3_number,
      choice4_number: choice4_number,
      choice1_name: choice1_name,
      choice2_name: choice2_name,
      choice3_name: choice3_name,
      choice4_name: choice4_name,
    };
    axios
      .get(this.apiUrl + `selection/${status_id}`, data, {
        headers: this.headers,
      })
      .then((response) => {
        console.log("get successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error getting:", error);
      });
  }
  async getResult() {
    axios
      .get(this.apiUrl + `result`, {
        headers: this.no_params_headers,
      })
      .then((response) => {
        console.log("get successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error getting:", error);
      });
  }
  async updateSelection({ status_id, choice, topic_id }) {
    const data = {
      status_id: status_id,
      choice: choice,
      topic_id: topic_id,
    };
    axios
      .put(this.apiUrl + `topic/${status_id}/${choice}/${topic_id}`, data, {
        headers: this.headers,
      })
      .then((response) => {
        console.log("Password update successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating :", error);
      });
  }
}

export default StudentApi;
