import React, { useState, useEffect } from "react";
import { WangEditor } from "../../components/Editor";
import { TextLine } from "../../components/Text/Textline";
import { TeacherSubmmitFrom } from "../../components/From";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setBody, setNote, commit } from "../../store/TeacherSubmmitFromSlice";

const TopicSubmissionPage = ({ body, note }) => {
  const token = useSelector((state) => state.user.access_token);
  // const TeacherSubmitForm = useSelector((state) => state.TeacherSubmitForm);
  // const { body, note } = TeacherSubmitForm;
  const dispatch = useDispatch();
  const handlecommit = () => {
    dispatch(commit({ token }));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-blue-100">
      <div className="flex flex-col w-[90%] ">
        <TextLine
          text="
          请注意！教师提交毕业设计题目的截止时间：xxxx/xx/xx，届时系统将无法提交和更新课题信息！"
          size="2xl"
          colour="text-red-500"
        />
        <TeacherSubmmitFrom />
        <div className="bg-blue-100">
          <div>
            <TextLine text="简介" size="xl" colour="text-black" />
            <WangEditor states={body} callback={setBody} />
          </div>
          <div>
            <TextLine text="备注" size="xl" colour="text-black" />
            <WangEditor states={note} callback={setNote} />
          </div>
        </div>
      </div>
      <br />
      <Button
        type="primary"
        className="bg-blue-400 w-[15%]"
        onClick={() => handlecommit()}
      >
        提交
      </Button>
      <br />
      <br />
    </div>
  );
};
export default TopicSubmissionPage;
