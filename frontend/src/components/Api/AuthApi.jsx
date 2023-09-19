import ApiService from "./BasicApi";
import React from "react";

const GetAccessToken = async (UserNum, UserPassword, url) => {
  const api = new ApiService(url);
  const response = await api.post_without_token(
    "api/login/access_token",
    `grant_type=&username=${encodeURIComponent(
      UserNum
    )}&password=${encodeURIComponent(
      UserPassword
    )}&scope=&client_id=&client_secret=`
  );
  return response.access_token;
};

export { GetAccessToken };
