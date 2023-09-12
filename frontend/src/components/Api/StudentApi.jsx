import axios from "axios";
import PublicApi from "./PublicApi";

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
  async addSelections({ choice1_id, choice2_id, choice3_id, choice4_id }) {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      const token = storedToken.replace(/"/g, "");
      const publicApi = new PublicApi({ token });
      const round = await publicApi.getRound();
      const data = {
        choice1_id: choice1_id,
        choice2_id: choice2_id,
        choice3_id: choice3_id,
        choice4_id: choice4_id,
      };
      axios
        .post(this.apiUrl + `topic/${round}`, data, {
          headers: this.headers,
        })
        .then((response) => {
          console.log("Select successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error selecting:", error);
        });
    }
  }
  async getAllTopics() {
    try {
      const response = await axios.get(this.apiUrl + `topic`, {
        headers: this.no_params_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }
  async getTopicDetails({ topic_id }) {
    try {
      const response = await axios.get(this.apiUrl + `topic/${topic_id}`, {
        headers: this.no_params_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topic Detail:", error);
    }
  }
  async getSelection() {
    try {
      const storedToken = localStorage.getItem("access_token");
      if (storedToken) {
        const token = storedToken.replace(/"/g, "");
        const publicApi = new PublicApi({ token });
        const round = await publicApi.getRound();
        const response = await axios.get(this.apiUrl + `selection/${round}`, {
          headers: this.headers,
        });
        return response.data;
      }
    } catch (error) {
      console.error("Error getting topics:", error);
    }
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
