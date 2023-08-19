import { Space, Input } from "antd";

const InPut = ({ title }) => {
  return (
    <div className="flex items-center bg-white-50 space-y-10">
      <div className="w-full text-center">{title}</div>
      <Space direction="vertical" size="middle" className="w-full h-full">
        <Space.Compact>
          <Input defaultValue="xxxxxxxxx" />
        </Space.Compact>
      </Space>
    </div>
  );
};

export default InPut;
