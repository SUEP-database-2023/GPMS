import axios from "axios";

class AdminApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/admin/";
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

  async getTopicData() {
    try {
      const response = await axios.get(this.apiUrl + "get/allresult", {
        headers: this.get_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }
}
export default AdminApi;
