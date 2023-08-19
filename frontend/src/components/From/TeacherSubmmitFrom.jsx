import React from "react";
import { InPut } from "../InPut";
const TeacherSubmmitFrom = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="row-span-1 flex flex-col  ">
        <InPut title="课题名称:" />
        <InPut title="课题类型:" />
        <InPut title="课题性质:" />
      </div>
      <div className="row-span-1 flex flex-col  ">
        <InPut title="适用专业:" />
        <InPut title="是否有项目背景:" />
        <InPut title="其他:" />
      </div>
    </div>
  );
};

export default TeacherSubmmitFrom;
