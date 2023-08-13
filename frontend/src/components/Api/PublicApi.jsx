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
  async changePassword({ newPassword }) {
    axios
      .put(this.apiUrl, newPassword, this.headers)
      .then((response) => {
        console.log("Password updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating password:", error);
      });
  }
}
export default PublicApi