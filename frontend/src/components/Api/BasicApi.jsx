import React from "react";

class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseURL}/${endpoint}`);
    const data = await response.json();
    return data;
  }

  async post_without_token(endpoint, payload) {
    const responses = await fetch(`${this.baseURL}/${endpoint}`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    }).then((res) => {
      let data = res.text(); //转成字符串判断
      return data.then((r) => {
        if (r.length === 0) return null;
        else return JSON.parse(r);
      });
    });
    return responses;
  }
}

// Add other methods as needed (e.g., put, delete)

export default ApiService;
