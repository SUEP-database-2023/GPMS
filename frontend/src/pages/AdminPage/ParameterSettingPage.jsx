import React from "react";
import { DatePicker, Space } from "antd";
import {Input } from "antd";
import AdminApi from "../../components/Api/AdminApi";
import { useSelector } from "react-redux";

const ParmeterSettingPage = () => {
  const [id, setID] = React.useState("");
  const handleID = (e) => {
    setID(e.target.value);
  };
  const [teacher_post_time, set_teacher_post_time] = React.useState("");
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const handle_set_teacher_post_time = ({ date, dateString }) => {
    console.log(dateString); // 可以在控制台查看所选日期的字符串形式
    set_teacher_post_time(dateString);
  };
  const [admin_audit_time, set_admin_audit_time] = React.useState("");
  const handle_set_admin_audit_time = (e) => {
    set_admin_audit_time(e.target.value);
  };
  const [student_begin_time1, set_student_begin_time1] = React.useState("");
  const handle_set_student_begin_time1 = (e) => {
    set_student_begin_time1(e.target.value);
  };
  const [student_end_time1, set_student_end_time1] = React.useState("");
  const handle_set_student_end_time1 = (e) => {
    set_student_end_time1(e.target.value);
  };
  const [admin_end_time1, set_admin_end_time1] = React.useState("");
  const handle_set_admin_end_time1 = (e) => {
    set_admin_end_time1(e.target.value);
  };
  const [student_end_time2, set_student_end_time2] = React.useState("");
  const handle_set_student_end_time2 = (e) => {
    set_student_end_time2(e.target.value);
  };
  const [admin_end_time2, set_admin_end_time2] = React.useState("");
  const handle_set_admin_end_time2 = (e) => {
    set_admin_end_time2(e.target.value);
  };
  const [major, setMajor] = React.useState("");
  const handleSetMajor = (e) => {
    setMajor(e.target.value);
  };
  const token = useSelector((state) => state.user.access_token);
  const handleTime = () => {
    const time = new AdminApi({ token: token });
    console.log(teacher_post_time);
    time.updateTime({
      id,
      teacher_post_time,
      admin_audit_time,
      student_begin_time1,
      student_end_time1,
      admin_end_time1,
      student_end_time2,
      admin_end_time2,
      major,
    } );
  };
  
  return (
    <div className="flex flex-col w-[100%] h-[100%] items-center bg-white-100 ">
      <div className="flex flex-col w-[80%] h-[90%] items-start bg-blue-100">
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-200">
          请注意，此处设置的截止时间均为该日期00点00分00秒
        </div>
        <div className="flex flex-col w-[100%] h-[90%] items-start justify-center bg-blue-100">
          <div className="flex w-[100%] h-[20%] bg-pink-100">
            <div className="flex flex-col w-[50%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                教师提交题目截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                {" "}
                {/*时间组件*/}
                <Space direction="vertical">
                  <DatePicker showTime onChange={onChange} />
                </Space>
              </div>
            </div>
            <div className="flex flex-col w-[50%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                管理员审核题目截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                {/*时间组件*/}
                <Space direction="vertical">
                  <DatePicker onChange={handle_set_admin_audit_time} />
                </Space>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] h-[30%] bg-pink-200">
            <div className="flex flex-col w-[33%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                学生第一次选题开始和截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                {" "}
                {/*时间组件*/}
                {/* 输入时间组件 */}
                <Space direction="vertical" size={12}>
                  <DatePicker onChange={handle_set_student_begin_time1}/>
                  <DatePicker onChange={handle_set_student_end_time1}/>
                </Space>
              </div>
            </div>
            <div className="flex flex-col w-[33%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                ID
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                <Input onChange={handleID} />
              </div>
            </div>
            <div className="flex flex-col w-[33%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                管理员第一次匹配截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                {" "}
                {/*时间组件*/}
                <Space direction="vertical">
                  <DatePicker onChange={handle_set_admin_end_time1} />
                </Space>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] h-[30%] bg-pink-300">
            <div className="flex flex-col w-[33%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                学生第二次选题截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                {" "}
                {/*时间组件*/}
                {/* 输入时间组件 */}
                <Space direction="vertical" size={12}>
                  <DatePicker onChange={handle_set_student_end_time2}/>
                </Space>
              </div>
            </div>
            <div className="flex flex-col w-[33%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                专业
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                <Input onChange={handleSetMajor}/>
              </div>
            </div>
            <div className="flex flex-col w-[33%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                管理员第二次匹配截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">
                {" "}
                {/*时间组件*/}
                <Space direction="vertical">
                  <DatePicker onChange={handle_set_admin_end_time2} />
                </Space>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] h-[20%] items-center justify-center bg-pink-400">
            <button
              onClick={handleTime}
              className="w-[20%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
            >
              提交
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ParmeterSettingPage;
