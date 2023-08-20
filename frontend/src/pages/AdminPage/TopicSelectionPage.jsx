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
    assignapi.assignTopics({ studentID, topicID });
  };
  const handleFirstAssignTopic = () => {
    const firstassignapi = new AdminApi({ token: token });
    firstassignapi.firstAssignTopics();
  };
  const handleSecondAssignTopic = () => {
    const secondassignapi = new AdminApi({ token: token });
    secondassignapi.secondAssignTopics();
  };
  return (
    <div className="flex flex-col w-[100%] h-screen items-center bg-white-100">
      <h1>my app</h1>
      <div className="flex flex-col w-[80%] h-[90%] items-start bg-white-100">
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-300">
          {" "}
          {/*标题盒子*/}
          管理选课
        </div>
        <div className="flex w-[100%] h-[60%] bg-blue-100">
          {" "}
          {/*普通批选课盒子和结果盒子*/}
          <div className="flex flex-col w-[50%] h-[100%] items-start bg-blue-200">
            {" "}
            {/*选课组件盒*/}
            <div className="flex w-[100%] h-[35%] items-center justify-center bg-yellow-100">
              <button
                onClick={handleFirstAssignTopic}
                className="w-[30%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
              >
                第一次选题分配
              </button>
            </div>
            <div className="flex w-[100%] h-[35%] items-center justify-center bg-pink-100">
              <button
                onClick={handleSecondAssignTopic}
                className="w-[30%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
              >
                第二次选题分配
              </button>
            </div>
            <div className="flex w-[100%] h-[35%] items-center justify-center bg-yellow-100">
            </div>
          </div>
          <div className="flex flex-col w-[50%] h-[100%] items-center justify-center bg-blue-200">
            {" "}
            {/*结果组件盒*/}
            <div className="flex w-[100%] h-[50%] items-center justify-center bg-pink-100">
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
            <div className="flex w-[100%] h-[50%] items-center justify-center bg-yellow-100">
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
        <div className="flex flex-col w-[100%] h-[20%] items-center justify-center bg-blue-300">
          {" "}
          {/*提前批选课盒子*/}
          <div className="flex w-[100%] h-[30%] justify-center">
            {" "}
            {/*标题盒子*/}
            提前批选课
          </div>
          <div className="flex w-[100%] h-[30%] justify-center">
            {" "}
            {/*组件盒*/}
            <div className="flex w-[50%] h-[100%] items-center justify-center bg-yellow-100">
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
          <div className="flex w-[100%] h-[40%] justify-center">
            <button
              onClick={ handleForceAssignTopic }
              className="w-[25%] bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
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
