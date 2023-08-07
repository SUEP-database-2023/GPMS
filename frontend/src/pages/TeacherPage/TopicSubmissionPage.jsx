import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Space, Input} from 'antd';

const TopicSubmissionPage = () => {
  const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <div className="flex flex-col w-[100%] h-[100%] items-center bg-white-100">
      <div className="flex flex-col w-[80%] h-[90%] items-start bg-blue-100">
        <div className="flex w-[100%] h-[10%] items-center justify-center bg-blue-200">
        请注意！教师提交毕业设计题目的截止时间：xxxx/xx/xx，届时系统将无法提交和更新课题信息！
        </div>
        <div className="flex flex-col w-[100%] h-[40%] items-start justify-center bg-blue-100">
          <div className="flex w-[100%] h-[25%] bg-pink-50">
            课题名称:<Space direction="vertical" size="middle">
                    <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
                    </Space>
          </div>
          <div className="flex w-[100%] h-[75%] items-center justify-center bg-pink-100">
            <div className="flex flex-col w-[50%] h-[100%] items-start justify-center bg-pink-100">
              <div className="flex w-[100%] h-[33%] items-center bg-white-50">
                适用专业:<Space direction="vertical" size="middle">
                    <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
                    </Space>
              </div>
              <div className="flex w-[100%] h-[33%] items-center bg-white-50">
                项目号:<Space direction="vertical" size="middle">
                    <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
                    </Space>
              </div>
              <div className="flex w-[100%] h-[33%] items-center bg-white-50">
                课题性质:<Space direction="vertical" size="middle">
                    <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
                    </Space>
              </div>
            </div>
            <div className="flex flex-col w-[50%] h-[100%] items-start bg-pink-50">
            <div className="flex w-[100%] h-[33%] items-center bg-white-50">
                是否有项目背景:<Space direction="vertical" size="middle">
                    <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
                    </Space>
              </div>
              <div className="flex w-[100%] h-[33%] items-center bg-white-50">
                其他:<Space direction="vertical" size="middle">
                    <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
                    </Space>
              </div>
              <div className="flex w-[100%] h-[33%] items-center bg-white-50">
                是否校外:<Space direction="vertical" size="middle">
                    <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
                    </Space>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-[30%] items-start justify-center bg-blue-200">
          <div className="flex w-[100%] h-[20%] bg-blue-50">
            简介：
          </div>
          <div className="flex w-[100%] h-[80%] bg-blue-50">
            <Space direction="vertical" size="middle">
            <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
            </Space>
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-[20%] items-start justify-center bg-blue-100">
        <div className="flex w-[100%] h-[20%] bg-blue-50">
            备注：
          </div>
          <div className="flex w-[100%] h-[80%] bg-blue-50">
            <Space direction="vertical" size="middle">
            <Space.Compact><Input defaultValue="xxxxxxxxx" /></Space.Compact>
            </Space>
          </div>
        </div>
      </div>
    </div>
  )
};
export default TopicSubmissionPage;
