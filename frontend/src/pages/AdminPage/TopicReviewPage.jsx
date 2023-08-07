import React from "react";
const TopicReviewPage = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100%] items-center bg-white-100">
    <div className="flex flex-col w-[80%] h-[90%] items-start bg-blue-100">
      <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-200">
        课题名称组件
      </div>
      <div className="flex w-[100%] h-[40%] items-center justify-center bg-blue-100">
        课题信息
      </div>
      <div className="flex w-[100%] h-[25%] items-center justify-center bg-blue-200">
        简介盒
      </div>
      <div className="flex w-[100%] h-[25%] items-center justify-center bg-blue-100">
        备注盒
      </div>
    </div>
  </div>
  )
};
export default TopicReviewPage;
