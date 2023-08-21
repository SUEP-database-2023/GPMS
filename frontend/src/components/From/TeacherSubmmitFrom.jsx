import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { InPut } from "../InPut";
import {
  setName,
  setType,
  setBackground,
  setOther,
} from "../../store/TeacherSubmmitFromSlice";
const TeacherSubmmitFrom = () => {
  const TeacherSubmitForm = useSelector((state) => state.TeacherSubmitForm);
  const { name, type, bgid, other } = TeacherSubmitForm;

  return (
    <div className="grid grid-cols-2">
      <div className="row-span-1 flex flex-col">
        <InPut title="课题名称:" state={name} callback={setName} />
        <InPut title="课题类型:" state={type} callback={setType} />
        {/* <InPut title="课题性质:" state={nature} callback={setNature} /> */}
      </div>
      <div className="row-span-1 flex flex-col">
        {/* <InPut title="适用专业:" state={major} callback={setMajor} /> */}
        <InPut title="是否有项目背景:" state={bgid} callback={setBackground} />
        <InPut title="其他:" state={other} callback={setOther} />
      </div>
    </div>
  );
};

export default TeacherSubmmitFrom;
