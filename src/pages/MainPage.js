import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ScheduleTable from "../components/ScheduleTable";

import data from "../data.json";
import './MainPage.css';

const MainPage = () => {
  
  return (
    <Box className="main-page">
      <Heading as="h2" size="lg" color="teal.500" mb={4}>
        My Dashboard
      </Heading>
      <ScheduleTable schedule={data.schedule} />
    </Box>
  );
};

export default MainPage;
