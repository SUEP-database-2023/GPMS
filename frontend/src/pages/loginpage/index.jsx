import React from "react";
import MyLoginForm from "../../components/Form/MyLoginForm";
import MyLoginLayOut from "../../components/Layout/MyLoginLayOut";
import "../../index.css";

const loginpage = () => {
  return (
    <>
      <MyLoginLayOut MyLoginFrom={MyLoginForm} />
    </>
  );
};

export default loginpage;
