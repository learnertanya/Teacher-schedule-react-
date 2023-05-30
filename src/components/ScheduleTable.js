import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import '../styles/ScheduleTable.css'

const ScheduleTable = ({ schedule }) => {
  return (
    <div className = "schedule-table">
      <h2>Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Class Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.date}>
              <td>{item.date}</td>
              <td>{item.className}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
