import React from "react";
import { DatePicker, Space } from "antd";
import { Input } from "antd";
import AdminApi from "../../components/Api/AdminApi";
import { useSelector } from "react-redux";

const ParmeterSettingPage = () => {
  const [id, setID] = React.useState("");
  const [teacher_post_time, set_teacher_post_time] = React.useState("");
  const [admin_audit_time, set_admin_audit_time] = React.useState("");
  const [student_begin_time1, set_student_begin_time1] = React.useState("");
  const [student_end_time1, set_student_end_time1] = React.useState("");
  const [admin_end_time1, set_admin_end_time1] = React.useState("");
  const [student_end_time2, set_student_end_time2] = React.useState("");
  const [admin_end_time2, set_admin_end_time2] = React.useState("");
  const [major, setMajor] = React.useState("");

  const handleSetMajor = (e) => {
    setMajor(e.target.value);
  };

  const handleManyTime = (value, dateString, callback) => {
    callback(value);
  };

  const handleID = (e) => {
    setID(e.target.value);
  };

  const token = useSelector((state) => state.user.access_token);

  const handleTime = () => {
    const time = new AdminApi({ token: token });

    time.updateTime({
      id: id,
      teacher_post_time: teacher_post_time,
      admin_audit_time: admin_audit_time,
      student_begin_time1: student_begin_time1,
      student_end_time1: student_end_time1,
      admin_end_time1: admin_end_time1,
      student_end_time2: student_end_time2,
      admin_end_time2: admin_end_time2,
      major: major,
    });
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
          参数设置
        </div>
        <div className="flex w-[100%] h-[10%] border border-gray-300">
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "blue",
            }}
          >
            ID:
            <Input onChange={handleID} style={{ width: 100 }} maxLength={1} />
          </div>
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "blue",
            }}
          >
            专业：
            <Input onChange={handleSetMajor} style={{ width: 300 }} />
            {/* TODO: UI更改，ID删掉，留专业，专业为下拉框，有信计与应物两个选项，下拉框选信计，则设置状态setMajor("XJ"), setID(1),选应物则设置状态setMajor("YW"), setID(2)*/}
          </div>
        </div>
        <div className="flex w-[100%] h-[20%] border border-gray-300">
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              // fontWeight: "bold",
              color: "black",
            }}
          >
            教师提交题目截止时间：
            <Space direction="vertical">
              <DatePicker
                onChange={(value, dateString) =>
                  handleManyTime(value, dateString, set_teacher_post_time)
                }
              />
            </Space>
          </div>
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              // fontWeight: "bold",
              color: "black",
            }}
          >
            管理员审核题目截止时间：
            <Space direction="vertical">
              <DatePicker
                onChange={(value, dateString) =>
                  handleManyTime(value, dateString, set_admin_audit_time)
                }
              />
            </Space>
          </div>
        </div>
        <div className="flex w-[100%] h-[20%] border border-gray-300">
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              color: "black",
            }}
          >
            学生第一次选题开始时间：
            <Space direction="vertical" size={12}>
              <DatePicker
                onChange={(value, dateString) =>
                  handleManyTime(value, dateString, set_student_begin_time1)
                }
              />
            </Space>
          </div>
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              color: "black",
            }}
          >
            学生第一次选题截止时间：
            <Space direction="vertical" size={12}>
              <DatePicker
                onChange={(value, dateString) =>
                  handleManyTime(value, dateString, set_student_end_time1)
                }
              />
            </Space>
          </div>
        </div>
        <div className="flex w-[100%] h-[20%] border border-gray-300">
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              color: "black",
            }}
          >
            专业：
            <Input onChange={handleSetMajor} style={{ width: 300 }} />
          </div>

          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              color: "black",
            }}
          >
            管理员第一次匹配截止时间：
            <Space direction="vertical">
              <DatePicker
                onChange={(value, dateString) =>
                  handleManyTime(value, dateString, set_admin_end_time1)
                }
              />
            </Space>
          </div>
        </div>

        <div className="flex w-[100%] h-[20%] border border-gray-300">
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              color: "black",
            }}
          >
            学生第二次选题截止时间：
            <Space direction="vertical" size={12}>
              <DatePicker
                onChange={(value, dateString) =>
                  handleManyTime(value, dateString, set_student_end_time2)
                }
              />
            </Space>
          </div>
          <div
            className="flex w-[50%] h-[100%] items-center justify-center"
            style={{
              fontSize: "20px",
              color: "black",
            }}
          >
            管理员第二次匹配截止时间：
            <Space direction="vertical">
              <DatePicker
                onChange={(value, dateString) =>
                  handleManyTime(value, dateString, set_admin_end_time2)
                }
              />
            </Space>
          </div>
        </div>
        <div className="flex w-[100%] h-[20%] items-center justify-center ">
          <button
            onClick={handleTime}
            className="w-[20%] btn bg-blue-500 border-blue-500 hover:bg-blue-400 hover:border-blue-400 text-white rounded-full"
          >
            提交
          </button>
        </div>
      </div>
    </div>
  );
};
export default ParmeterSettingPage;
