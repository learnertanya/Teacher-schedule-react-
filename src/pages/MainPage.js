import React from "react";
import TeacherInfo from "../components/TeacherInfo";
import Calendar from "../components/Calendar";
import ScheduleTable from "../components/ScheduleTable";
import { Box, Flex, Text } from '@chakra-ui/react';


const MainPage = () => {
  const schedule = [
    { date: "2023-05-30", className: "Math", time: "9:00 AM" },
    { date: "2023-05-31", className: "Science", time: "10:30 AM" },
    // Add more schedule items here
  ];
  return (
    <div className = "main-page">
      <h2>Main Page</h2>
      <TeacherInfo lastName="Doe" teacherId="123" />
      <Calendar />
      <ScheduleTable schedule={schedule} />
    </div>
  );
};

export default MainPage;
