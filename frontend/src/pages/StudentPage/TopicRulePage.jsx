import React from "react";
const TopicRulePage = () => {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col items-center justify-center space-y-5 w-[50%] bg-white p-5">
        <div className="text-red-600 text-3xl items-center">
          数理学院毕业论文(设计)选题规则
        </div>
        <div className="flex flex-col text-black text-xl space-y-10">
          <div>
            数理学院毕业论文(设计)选题分两轮进行，本着公平、公开、公正的原则，在第一轮选题操作开始后，同学们第一次登录时会自动给一个随机数，作为后续题目匹配的参数。
          </div>
          <div>
            第一轮选题：每位同学必须选择4个毕业论文题目，按随机数从小到大以及志愿优先级进行匹配。待第一轮选题结果公布后，未选中的同学进行第二轮选题。
          </div>
          <div>
            第二轮选题：第一轮选题不成功的同学进行第二轮选题，每位同学必须选择4个毕业论文题目，按随机数从大到小以及志愿优先级进行匹配。若第二轮仍未选中的同学由学院统一调剂，并公布最终选题结果。
          </div>
          <div>
            请各位同学一定要注意系统提示的时间节点，以免错过时间失去选择机会。
          </div>
        </div>
        <div className="text-red-600">
          上海电力大学数理学院毕业设计选题管理系统
        </div>
      </div>
    </div>
  );
};
export default TopicRulePage;
