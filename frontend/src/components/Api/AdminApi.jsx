import axios from "axios";

class AdminApi {
  constructor({ token }) {
    this.apiUrl = "http://localhost:8000/api/admin/";
    this.headers = {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
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
}
export default AdminApi;
