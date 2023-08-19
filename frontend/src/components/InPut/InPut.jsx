import { Space, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
const InPut = ({ title, state, callback }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center bg-white-50 space-y-10">
      <div className="w-full text-center">{title}</div>
      <Space direction="vertical" size="middle" className="w-full h-full">
        <Space.Compact>
          <Input
            value={state}
            onChange={(e) => dispatch(callback(e.target.value))}
          />
        </Space.Compact>
      </Space>
    </div>
  );
};

export default InPut;
