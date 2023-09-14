import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Space, Input } from "antd";
import AdminApi from "../../components/Api/AdminApi";
import { useSelector } from "react-redux";

const TopicSelectionPage = () => {
  const [studentID, setStudentID] = React.useState("");
  const [topicID, setTopicID] = React.useState("");

  const token = useSelector((state) => state.user.access_token);
  const handleStudentID = (e) => {
    setStudentID(e.target.value);
  };
  const handleTopicID = (e) => {
    setTopicID(e.target.value);
  };

  const handleForceAssignTopic = () => {
    const assignapi = new AdminApi({ token: token });
    assignapi.assignTopics({ studentID: studentID, topicID: topicID });
  };
  const handleFirstAssignTopic = () => {
    const firstassignapi = new AdminApi({ token: token });
    firstassignapi.firstAssignTopics();
    firstassignapi.updateRound({ round: 1 });
  };
  const handleSecondAssignTopic = () => {
    const secondassignapi = new AdminApi({ token: token });
    secondassignapi.secondAssignTopics();
    secondassignapi.updateRound({ round: 2 });
  };
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div
        className="flex-col w-[80%] h-[80%] bg-white"
        style={{ borderRadius: "20px 20px 10px 10px" }}
      >
        <div
          className="flex w-[100%] h-[15%] items-center justify-center bg-blue-500 border border-gray-300"
          style={{ borderRadius: "20px 20px 0 0" }}
        >
          管理选课
        </div>
        <div className="flex-col w-[100%] h-[35%] border border-gray-300">
          <div className="flex w-[100%] h-[20%] items-center justify-center bg-blue-300">
            提前批选课
          </div>
          <div className="flex w-[100%] h-[50%]">
            <div className="flex w-[50%] h-[100%] items-center justify-center">
              学号
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <Input value={studentID} onChange={handleStudentID} />
                </Space.Compact>
              </Space>
            </div>
            <div className="flex w-[50%] h-[100%] items-center justify-center">
              课号
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <Input value={topicID} onChange={handleTopicID} />
                </Space.Compact>
              </Space>
            </div>
          </div>
          <div className="flex w-[100%] h-[30%] items-center justify-center">
            <button
              onClick={handleForceAssignTopic}
              className="w-[20%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
            >
              提交
            </button>
          </div>
        </div>
        <div className="flex w-[100%] h-[25%] border border-gray-300">
          <div className="flex  w-[50%] h-[100%] items-center justify-center">
            <button
              onClick={handleFirstAssignTopic}
              className="w-[30%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
            >
              第一次选题分配
            </button>
          </div>
          <div className="flex w-[50%] h-[100%] items-center justify-center bg-blue-200">
            <Space direction="vertical">
              <Space wrap>
                <Button type="primary" icon={<DownloadOutlined />}>
                  第一次匹配结果
                </Button>
              </Space>
            </Space>
            <Space direction="vertical">
              <Space wrap>
                <Button type="primary" icon={<DownloadOutlined />}>
                  未成功人名单
                </Button>
              </Space>
            </Space>
          </div>
        </div>
        <div
          className="flex w-[100%] h-[25%] border border-gray-300"
          style={{ borderRadius: "0 0 10px 10px" }}
        >
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{ borderRadius: "0 0 0 10px" }}
          >
            <button
              onClick={handleSecondAssignTopic}
              className="w-[30%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
            >
              第二次选题分配
            </button>
          </div>
          <div
            className="flex w-[50%] h-[100%] items-center justify-center bg-blue-200"
            style={{ borderRadius: "0 0 10px 0" }}
          >
            <Space direction="vertical">
              <Space wrap>
                <Button type="primary" icon={<DownloadOutlined />}>
                  第二次匹配结果
                </Button>
              </Space>
            </Space>
            <Space direction="vertical">
              <Space wrap>
                <Button type="primary" icon={<DownloadOutlined />}>
                  未成功人名单
                </Button>
              </Space>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopicSelectionPage;
