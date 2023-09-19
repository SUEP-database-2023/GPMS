import React from "react";

const whatIsMyRole = ({ identity }) => {
  if (identity === "0") return "/admin";
  else if (identity === "1") return "/teacher";
  else if (identity === "2") return "/student";
  else return "/";
};

export default whatIsMyRole;
