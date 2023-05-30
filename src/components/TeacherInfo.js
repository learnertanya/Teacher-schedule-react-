import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import "../styles/TeacherInfo.css";

const TeacherInfo = ({ lastName, teacherId }) => {
  return (
    <div className="teacher-info">
      <h2>Teacher Information</h2>
      <p>Last Name: {lastName}</p>
      <p>Teacher ID: {teacherId}</p>
    </div>
  );
};

export default TeacherInfo;
