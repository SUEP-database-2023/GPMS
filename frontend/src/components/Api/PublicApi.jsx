import axios from "axios";

class PublicApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/public/";
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }
  async getRound() {
    try {
      const response = await axios.get(this.apiUrl + "round", {
        headers: this.no_params_headers,
      });
      return response.data;
    } catch (error) {
      console.error("Error getting topics:", error);
    }
  }
  async changePassword({ newPassword }) {
    const data = { password: newPassword };
    axios
      .put(this.apiUrl + "update_pwd", data, { headers: this.headers })
      .then((response) => {
        console.log("Password updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating password:", error);
      });
  }
}
export default PublicApi;
