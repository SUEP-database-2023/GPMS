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
    <div className="flex flex-col w-full h-full items-center ">
      <div
        className="flex flex-col w-[80%] h-[80%] items-start bg-white"
        style={{ borderRadius: "20px 20px 0px 0px" }}
      >
        <div
          className="flex w-[100%] h-[10%] items-center justify-center bg-gradient-to-b from-blue-500 to-blue-800"
          style={{
            borderRadius: "20px 20px 0px 0px",
            fontSize: "20px",
            color: "white",
          }}
        >
          管理选课
        </div>
        <div className="flex w-[100%] h-[25%] ">
          <div className="flex  w-[50%] h-[100%] items-center justify-center">
            <button
              onClick={handleFirstAssignTopic}
              className="w-[30%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
            >
              第一次选题分配
            </button>
          </div>
          <div className="flex w-[50%] h-[100%] items-center justify-center">
            <Space direction="vertical">
              <Space wrap>
                <Button
                  className="border border-gray-300"
                  type="primary"
                  style={{
                    color: "black",
                  }}
                  icon={<DownloadOutlined />}
                >
                  第一次匹配结果
                </Button>
              </Space>
            </Space>
            <Space direction="vertical">
              <Space wrap>
                <Button
                  className="border border-gray-300"
                  type="primary"
                  style={{
                    color: "black",
                  }}
                  icon={<DownloadOutlined />}
                >
                  未成功人名单
                </Button>
              </Space>
            </Space>
          </div>
        </div>
        <hr color="gray"></hr>
        <div className="flex w-[100%] h-[25%] ">
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
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{ borderRadius: "0 0 10px 0" }}
          >
            <Space direction="vertical">
              <Space wrap>
                <Button
                  className="border border-gray-300"
                  type="primary"
                  style={{
                    color: "black",
                  }}
                  icon={<DownloadOutlined />}
                >
                  第二次匹配结果
                </Button>
              </Space>
            </Space>
            <Space direction="vertical">
              <Space wrap>
                <Button
                  className="border border-gray-300"
                  type="primary"
                  style={{
                    color: "black",
                  }}
                  icon={<DownloadOutlined />}
                >
                  未成功人名单
                </Button>
              </Space>
            </Space>
          </div>
        </div>
        <hr color="gray"></hr>
        <div className="flex-col w-[100%] h-[40%] ">
          <div
            className="flex w-[100%] h-[20%] items-center justify-center"
            style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
          >
            提前批选课
          </div>
          <div className="flex w-[100%] h-[50%]">
            <div
              className="flex w-[50%] h-[100%] items-center justify-center"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              学号:
              <Space direction="vertical" size="middle">
                <Space.Compact>
                  <Input value={studentID} onChange={handleStudentID} />
                </Space.Compact>
              </Space>
            </div>
            <div
              className="flex w-[50%] h-[100%] items-center justify-center"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              课号:
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
      </div>
    </div>
  );
};
export default TopicSelectionPage;
