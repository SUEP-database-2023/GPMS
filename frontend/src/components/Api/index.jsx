class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseURL}/${endpoint}`);
    const data = await response.json();
    return data;
  }

  async post(endpoint, payload) {
    const response = await fetch(`${this.baseURL}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  }

  // Add other methods as needed (e.g., put, delete)
}
