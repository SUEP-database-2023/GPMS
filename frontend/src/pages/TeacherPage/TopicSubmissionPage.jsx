import React, { useState } from "react";
import { WangEditor } from "../../components/Editor";
import { InPut } from "../../components/InPut";
import { TextLine } from "../../components/Text/Textline";
import { TeacherSubmmitFrom } from "../../components/From";
const TopicSubmissionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col w-[90%] bg-blue-100">
        <TextLine
          text="
          请注意！教师提交毕业设计题目的截止时间：xxxx/xx/xx，届时系统将无法提交和更新课题信息！"
          size="2xl"
          colour="text-red-500"
        />
        <TeacherSubmmitFrom />
        <div className="bg-blue-200">
          <div>
            <TextLine text="简介" size="xl" colour="text-black" />
            <WangEditor />
          </div>
          <div>
            <TextLine text="备注" size="xl" colour="text-black" />
            <WangEditor />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopicSubmissionPage;
