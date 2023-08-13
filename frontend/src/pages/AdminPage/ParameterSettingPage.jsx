import React, { useState } from 'react';
import { useSelector } from "react-redux";
import DatePicker from 'antd/es/date-picker'; // Assuming you're using Ant Design DatePicker
import { Button } from 'antd'; // Import Button from Ant Design

function ParmeterSettingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // State to store the selected date 
  const access_token=useSelector((state) => state.user.access_token);
  console.log(access_token);
  const onChange = (date) => {
    setSelectedDate(date); // Update selectedDate state when DatePicker value changes
  };

  const handleUpdate = async () => {
    const updatedTimeData = {
      teacher_post_time: selectedDate.toISOString(),
      admin_audit_time: selectedDate.toISOString(),
      student_begin_time1: selectedDate.toISOString(),
      student_end_time1: selectedDate.toISOString(),
      admin_end_time1: selectedDate.toISOString(),
      student_end_time2: selectedDate.toISOString(),
      admin_end_time2: selectedDate.toISOString(),
      major:"应物",
    };

    try {
      const response = await fetch("http://localhost:8000/api/admin/update/end_time/1",
         {
        method: 'PUT',
        headers: {
          'accept': "application/json",
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTimeData),
      });

      if (response.ok) {
        // Handle successful update
        console.log("Update successful");
      } else {
        console.error("Update request failed.");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      {/* Render DatePicker */}
      <DatePicker onChange={onChange} />

      {/* Render Submit Button */}
      <Button
        type="primary"
        onClick={handleUpdate}
      >
        提交更新
      </Button>
    </div>
  );
}
export default ParmeterSettingPage;
