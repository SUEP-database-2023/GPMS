import React from "react";
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const { RangePicker } = DatePicker;
const ParmeterSettingPage = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100%] items-center bg-white-100">
      <div className="flex flex-col w-[80%] h-[90%] items-start bg-blue-100">
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-200">
          请注意，此处设置的截止时间均为该日期xx点xx分xx秒
        </div>
        <div className="flex flex-col w-[100%] h-[90%] items-start justify-center bg-blue-100">
          <div className="flex w-[100%] h-[20%] bg-pink-100">
            <div className="flex flex-col w-[50%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
              教师提交题目截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
              <Space direction="vertical"><DatePicker onChange={onChange} /></Space>
              </div>
            </div>
            <div className="flex flex-col w-[50%] h-[100%] items-start">
              <div className="flex w-[100%] h-[50%] items-center justify-center">
              管理员审核题目截止时间
              </div>
              <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
              <Space direction="vertical"><DatePicker onChange={onChange} /></Space>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] h-[30%] bg-pink-200">
              <div className="flex flex-col w-[33%] h-[100%] items-start">
                <div className="flex w-[100%] h-[50%] items-center justify-center">
                学生第一次选题开始时间
                </div>
                <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
                {/* 输入时间组件 */}
                <Space direction="vertical" size={12}><RangePicker /></Space>
                </div>
              </div>
              <div className="flex flex-col w-[33%] h-[100%] items-start">
                <div className="flex w-[100%] h-[50%] items-center justify-center">
                学生第一次选题截止时间
                </div>
                <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
                输入时间组件
                </div>
              </div>
              <div className="flex flex-col w-[33%] h-[100%] items-start">
                <div className="flex w-[100%] h-[50%] items-center justify-center">
                管理员第一次匹配截止时间
                </div>
                <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
                <Space direction="vertical"><DatePicker onChange={onChange} /></Space>
                </div>
              </div>
          </div>
          <div className="flex w-[100%] h-[30%] bg-pink-300">
          <div className="flex flex-col w-[33%] h-[100%] items-start">
                <div className="flex w-[100%] h-[50%] items-center justify-center">
                学生第二次选题开始时间
                </div>
                <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
                {/* 输入时间组件 */}
                <Space direction="vertical" size={12}><RangePicker /></Space>
                </div>
              </div>
              <div className="flex flex-col w-[33%] h-[100%] items-start">
                <div className="flex w-[100%] h-[50%] items-center justify-center">
                学生第二次选题截止时间
                </div>
                <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
                输入时间组件
                </div>
              </div>
              <div className="flex flex-col w-[33%] h-[100%] items-start">
                <div className="flex w-[100%] h-[50%] items-center justify-center">
                管理员第二次匹配截止时间
                </div>
                <div className="flex w-[100%] h-[50%] items-center justify-center">   {/*时间组件*/}
                <Space direction="vertical"><DatePicker onChange={onChange} /></Space>
                </div>
              </div>
          </div>
          <div className="flex w-[100%] h-[20%] items-center justify-center bg-pink-400">
          <button
          onClick={() => {
            handleLogin();
          }}
          className="w-[20%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
        >
          提交
        </button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default ParmeterSettingPage;
