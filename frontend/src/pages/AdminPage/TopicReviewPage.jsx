import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
const columns = [
  {
    title: "序号",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "课题编号",
    dataIndex: "subjectnumber",
    key: "subjectnumber",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "课题名称",
    dataIndex: "subjectname",
    key: "subjectname",
  },
  {
    title: "指导老师",
    key: "teacher",
    dataIndex: "teacher",
  },
];
const data = [
  {
    key: '1',
    id: 1,
    subjectnumber:393413313,
    subjectname: '我爱数学',
    teacher:'a',
  },
  {
    key: '2',
    id: 2,
    subjectnumber:41319,
    subjectname: '我爱物理',
    teacher:'b',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
};
const TopicReviewPage = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col w-[90%]">
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      </div>
    </div>
  );
};
export default TopicReviewPage;
